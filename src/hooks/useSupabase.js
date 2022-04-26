import { useState } from "react";
import { supabase } from "../supabaseClient";

const MEMBER_ROLE = 3;
const BUCKET_FOLDER = 'avatars';

export function useSupabase() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);
  const [isLoadingPayments, setIsLoadingPayments] = useState(false);

  const [members, setMembers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [paymentsSummary, setPaymentsSummary] = useState({
    total: 0
  });

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
      }
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const createPayment = async (payment) => {
    console.log(payment);

     setIsLoadingPayments(true);
     try {
       const { data, error, status } = await supabase
         .from("payments_history")
         .insert(payment);

       if (error && status !== 406) {
         throw error;
       }

       Promise.resolve(data);
       
     } catch (error) {
       console.error(error);
       romise.resolve(error);
       
     } finally {
       setIsLoadingPayments(false);
     }
  }

  const uploadImage = async (fileProp) => {
    setIsLoading(true);

    try {

      if (!fileProp) {
        throw new Error("You must select an image to upload.");
      }

      const file = fileProp;
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `public/${fileName}`;

      await supabase.storage.from(BUCKET_FOLDER).upload(filePath, file);

      const getPublicUrlResult = supabase.storage
        .from(BUCKET_FOLDER)
        .getPublicUrl(filePath);

      return Promise.resolve(getPublicUrlResult);

    } catch (error) {
      return Promise.reject(error);
    } finally {
      setIsLoading(true);
    }
  }


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
    setIsLoadingSummary(true);
    try {
      const { data, error, status } = await supabase.rpc("getsummary", {
        _user_id: user_id,
      });

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
      
    } finally {
      setIsLoadingSummary(false);
    }
  }

  const getPaymentsById = async (id) => {
    try {
      setIsLoadingPayments(true);
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
        setPayments(data);
        return Promise.resolve(data[0]);
      } else {
        return Promise.reject(data);
      }
    } catch (error) {
      return Promise.reject(error);
    } finally {
      setIsLoadingPayments(false);
    }
  }


  return {
    createPayment,
    isLoading,
    isLoadingSummary,
    isLoadingPayments,
    members,
    payments,
    paymentsSummary,
    validateLogin,
    getPaymentsById,
    getMembers,
    getPaymensSummary,
    uploadImage,
  };
}
