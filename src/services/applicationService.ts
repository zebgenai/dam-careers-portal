
import { supabase } from "@/integrations/supabase/client";

export interface JobApplication {
  jobId: string;
  fullName: string;
  email: string;
  phone?: string;
  message?: string;
  cvFile: File;
}

export const applicationService = {
  async submitApplication(application: JobApplication) {
    try {
      // Upload CV file to storage
      const fileExt = application.cvFile.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${application.jobId}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('cv-uploads')
        .upload(filePath, application.cvFile);

      if (uploadError) {
        throw new Error(`Failed to upload CV: ${uploadError.message}`);
      }

      // Get public URL for the uploaded file
      const { data: urlData } = supabase.storage
        .from('cv-uploads')
        .getPublicUrl(filePath);

      // Save application to database
      const { error: dbError } = await supabase
        .from('job_applications')
        .insert({
          job_id: application.jobId,
          full_name: application.fullName,
          email: application.email,
          phone: application.phone,
          message: application.message,
          cv_filename: application.cvFile.name,
          cv_url: urlData.publicUrl,
        });

      if (dbError) {
        throw new Error(`Failed to save application: ${dbError.message}`);
      }

      return { cvUrl: urlData.publicUrl };
    } catch (error) {
      console.error('Application submission error:', error);
      throw error;
    }
  },

  async sendNotificationEmail(jobTitle: string, applicantData: Omit<JobApplication, 'cvFile' | 'jobId'>, cvUrl: string) {
    try {
      const response = await supabase.functions.invoke('send-application-email', {
        body: {
          jobTitle,
          applicantName: applicantData.fullName,
          applicantEmail: applicantData.email,
          applicantPhone: applicantData.phone,
          message: applicantData.message,
          cvUrl,
        },
      });

      if (response.error) {
        throw new Error(`Failed to send notification email: ${response.error.message}`);
      }

      return response.data;
    } catch (error) {
      console.error('Email notification error:', error);
      throw error;
    }
  }
};
