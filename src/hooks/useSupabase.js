import { useState, useEffect, useMemo } from "react";
import { supabase } from "../supabaseClient";

const MEMBER_ROLE = 3;

export function useSupabase() {
  const [isLoading, setIsLoading] = useState();
  const [members, setMembers] = useState([]);

  const getMembers = async () => {
    setIsLoading(true);
    try {
      let { data, error, status } = await supabase
        .from("users")
        .select(`id, name`)
        .eq("role", MEMBER_ROLE);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setMembers(data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    getMembers();
  }, []);

  return {
    isLoading,
    members
  };
}
