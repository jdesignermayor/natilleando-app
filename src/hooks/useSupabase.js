import { useState } from "react";
import { supabase } from "../supabaseClient";

const MEMBER_ROLE = 3;

export function useSupabase() {
  const [isLoading, setIsLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [paymentsSummary, setPaymentsSummary] = useState({
    total: 0
  });

  const getMembers = async () => {
    console.log("executed get members");
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
      const { data, error, status } = await supabase
        .from("users")
        .select("id, name, surname, document_number, photo_url, whatsapp_number, referer_id")
        .eq("id", id)
        .eq("document_number", password);

      if (error && status !== 406) {
        throw error;
      }


      if (data.length > 0) {
        return Promise.resolve(data[0]);
      } else {
        return Promise.reject(data);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const getPaymensSummary = async (user_id) => {
    try {
      const { data, error, status } = await supabase
        .rpc('getsummary', {
          _user_id: user_id
        })

      if (error && status !== 406) {
        throw error;
      }

      if (data.length > 0) {
        const result = data[0];
        setPaymentsSummary(result);
        return Promise.resolve(result);
      }

    } catch (error) {

      return Promise.reject(error);
    }
  }

  const getPaymentsById = async (id) => {
    try {
      setIsLoading(true);
      const { data, error, status } = await supabase
        .from("payments_history")
        .select(
          "id, user_id, amount, payment_date, payment_type, payment_status"
        )
        .eq("user_id", id);

      if (error && status !== 406) {
        throw error;
      }

      if (data.length > 0) {
        setIsLoading(false);
        setPayments(data);
        return Promise.resolve(data[0]);
      } else {
        setIsLoading(false);
        return Promise.reject(data);
      }
    } catch (error) {
      setIsLoading(false);
      return Promise.reject(error);
    }
  }


  return {
    isLoading,
    members,
    payments,
    paymentsSummary,
    validateLogin,
    getPaymentsById,
    getMembers,
    getPaymensSummary,
  };
}
