
import { supabase } from '@/integrations/supabase/client';

export interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  department: string;
  requirements: string;
  salary_range: string;
  experience_required: string;
  job_type: string;
  deadline: string;
  posted_at: string;
  is_active: boolean;
}

export interface JobApplication {
  id: string;
  user_id: string;
  job_id: string;
  cv_url?: string;
  cover_letter?: string;
  applied_at: string;
  status: 'pending' | 'accepted' | 'rejected';
  admin_notes?: string;
}

export const jobsService = {
  // Get all active jobs
  async getJobs(filters?: { department?: string; type?: string; search?: string }) {
    let query = supabase
      .from('jobs')
      .select('*')
      .eq('is_active', true)
      .order('posted_at', { ascending: false });

    if (filters?.department && filters.department !== 'all') {
      query = query.eq('department', filters.department);
    }

    if (filters?.type && filters.type !== 'all') {
      query = query.eq('job_type', filters.type);
    }

    if (filters?.search) {
      query = query.or(`title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
    }

    const { data, error } = await query;
    
    if (error) throw error;
    return data;
  },

  // Get job by ID
  async getJobById(id: string) {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  // Apply for a job
  async applyForJob(jobId: string, coverLetter?: string, cvUrl?: string) {
    const { data, error } = await supabase
      .from('applications')
      .insert({
        job_id: jobId,
        user_id: (await supabase.auth.getUser()).data.user?.id,
        cover_letter: coverLetter,
        cv_url: cvUrl
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Get user's applications
  async getUserApplications() {
    const { data, error } = await supabase
      .from('applications')
      .select(`
        *,
        jobs:job_id (
          title,
          department,
          location
        )
      `)
      .order('applied_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  // Check if user has already applied for a job
  async hasUserApplied(jobId: string) {
    const { data, error } = await supabase
      .from('applications')
      .select('id')
      .eq('job_id', jobId)
      .eq('user_id', (await supabase.auth.getUser()).data.user?.id);

    if (error) throw error;
    return data && data.length > 0;
  },

  // Admin: Create a new job
  async createJob(jobData: Omit<Job, 'id' | 'posted_at' | 'is_active'>) {
    const { data, error } = await supabase
      .from('jobs')
      .insert({
        ...jobData,
        created_by: (await supabase.auth.getUser()).data.user?.id
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Admin: Update job
  async updateJob(id: string, jobData: Partial<Job>) {
    const { data, error } = await supabase
      .from('jobs')
      .update(jobData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Admin: Get all applications
  async getAllApplications() {
    const { data, error } = await supabase
      .from('applications')
      .select(`
        *,
        jobs:job_id (
          title,
          department
        ),
        profiles:user_id (
          name,
          phone,
          city
        )
      `)
      .order('applied_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  // Admin: Update application status
  async updateApplicationStatus(id: string, status: 'pending' | 'accepted' | 'rejected', adminNotes?: string) {
    const { data, error } = await supabase
      .from('applications')
      .update({ 
        status,
        admin_notes: adminNotes
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }
};
