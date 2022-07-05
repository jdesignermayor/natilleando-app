import { useState } from "react";
import { supabase } from "../supabaseClient";

const ALLOWED_ROLE = [1, 3];
const BUCKET_FOLDER = "avatars";

const mapRoles = ALLOWED_ROLE.map((r) => `${r}`).join(",");
const stringRoles = `(${mapRoles})`;

export function useSupabase() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);
  const [isLoadingPayments, setIsLoadingPayments] = useState(false);

  const [members, setMembers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [lastPayments, setLatestPayments] = useState([]);
  const [allSummary, setAllSummary] = useState({
    total_verified: 0,
    total_unverified: 0,
  });

  const [paymentsSummary, setPaymentsSummary] = useState({
    total: 0,
  });

  const getMembers = async () => {
    setIsLoading(true);
    try {
      const { data, error, status } = await supabase
        .from("users")
        .select(`id, name`)
        .filter("role", "in", stringRoles);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setMembers(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getLastPayments = async () => {
    setIsLoading(true);

    try {
      const { data, error, status } = await supabase.rpc("getlastpayments");


      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setLatestPayments(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAllSummary = async () => {
    setIsLoading(true);

    try {
      const { data, error, status } = await supabase.rpc("getallsummary");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setAllSummary(data[0]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const createPayment = async (payment) => {
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
      Promise.resolve(error);
    } finally {
      setIsLoadingPayments(false);
    }
  };

  const uploadImage = async (fileProp) => {
    setIsLoading(true);
    try {
      if (!fileProp) {
        throw new Error("You must select an image to upload.");
      }

      const file = fileProp;
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random(4)}.${fileExt}`;
      const filePath = `public/${fileName}`;
      // const fileExtString = fileExt.toLowerCase();

      // alert(fileExtString);

      // if (
      //   fileExtString !== "png" ||
      //   fileExtString !== "jpg" ||
      //   fileExtString !== "jpeg"
      // ) {
      //   console.log(
      //     "You must select an image in jpg, jpeg or png format",
      //     fileExt
      //   );
      //   throw new Error("You must select an image in jpg, jpeg or png format.");
      // }

      await supabase.storage.from(BUCKET_FOLDER).upload(filePath, file);

      const { publicURL, error } = supabase.storage
        .from(BUCKET_FOLDER)
        .getPublicUrl(filePath);

      if (error) {
        throw error("Error al subir imagen:", error);
      }

      // const { signedURL, error } = await supabase.storage
      //   .from(BUCKET_FOLDER)
      //   .createSignedUrl(filePath, 60);

      return Promise.resolve(publicURL);
    } catch (error) {
      return Promise.reject(error);
    } finally {
      setIsLoading(true);
    }
  };

  const validateLogin = async ({ id, password }) => {
    try {
      const { data, error, status } = await supabase
        .from("users")
        .select(
          "id, name, surname, document_number, photo_url, whatsapp_number, referer_id, role"
        )
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

  const aprovePayment = async (id) => {
    const confirmFlag = confirm("Estas seguro que deseas aprobar el pago?");
    if (confirmFlag) {
      try {
        const { data, error, status } = await supabase
          .from("payments_history")
          .update({
            payment_status: "verified",
          })
          .eq("id", id);

        if (error && status !== 406) {
          throw error;
        }
        return Promise.resolve(data);
      } catch (error) {
        return Promise.reject(error);
      }
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
  };

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
  };

  return {
    createPayment,
    aprovePayment,
    isLoading,
    isLoadingSummary,
    isLoadingPayments,
    members,
    payments,
    lastPayments,
    paymentsSummary,
    validateLogin,
    allSummary,
    getPaymentsById,
    getMembers,
    getPaymensSummary,
    getLastPayments,
    getAllSummary,
    uploadImage,
  };
}
