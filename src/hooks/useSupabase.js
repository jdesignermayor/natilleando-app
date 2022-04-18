import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export function useSupabase() {
  const [isLoading, setIsLoading] = useState();

  const getMembers = () => {
    setIsLoading(true);
    try {
        let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      
    } catch (error) {
        
    }
    
  };

  useEffect(() => {

  }, []);

  return {
    getMembers,
  };
}
