
import { supabase } from '@/integrations/supabase/client';

export const fileService = {
  // Upload CV file
  async uploadCV(file: File, userId: string) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}/cv_${Date.now()}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from('cvs')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (error) throw error;

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('cvs')
      .getPublicUrl(fileName);

    return {
      path: data.path,
      url: urlData.publicUrl
    };
  },

  // Get CV download URL
  async getCV(path: string) {
    const { data, error } = await supabase.storage
      .from('cvs')
      .createSignedUrl(path, 3600); // 1 hour expiry

    if (error) throw error;
    return data.signedUrl;
  },

  // Delete CV
  async deleteCV(path: string) {
    const { error } = await supabase.storage
      .from('cvs')
      .remove([path]);

    if (error) throw error;
  }
};
