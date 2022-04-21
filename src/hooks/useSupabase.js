import { useState, useEffect, useMemo } from "react";
import { supabase } from "../supabaseClient";

const MEMBER_ROLE = 3;

export function useSupabase() {
  const [isLoading, setIsLoading] = useState(false);
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

  const validateLogin = async ({ id, password }) => {
      try {
        let { data, error, status } = await supabase
          .from("users")
          .select("id, name, surname, document_number, photo_url, whatsapp_number, referer_id")
          .eq("id", id)
          .eq("document_number", password);

        if (error && status !== 406) {
          throw error;
        }

        if (data.length > 0) {
          return Promise.resolve(data[0]);
        }else{
          return Promise.reject(data);
        }
      } catch (error) {
        return Promise.reject(error);
      }
  };

  useEffect(() => {
    getMembers();
  }, []);

  return {
    isLoading,
    members,
    validateLogin,
  };
}
