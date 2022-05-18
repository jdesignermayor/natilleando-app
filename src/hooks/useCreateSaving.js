import { useState } from "react";
import { useSimpleForm } from "./useSimpleForm";
import { useSupabase } from "./useSupabase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

export function useCreateSaving() {
  const [isOpenAnnounce, setIsOpenAnnounce] = useState(true);
  const navigate = useNavigate();

  const {
    state: { user },
  } = useAuth();

  const { id } = user;

  const {
    formData,
    handleInputChange,
    isLoadingForm,
    isErrorForm,
    setIsLoadingForm,
    setIsErrorForm,
  } = useSimpleForm();

  const { uploadImage, createPayment } = useSupabase();

  const handleHideComponent = () => {
    setIsOpenAnnounce(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoadingForm(true);
    try {
      const publicURL = await uploadImage(formData?.voucherPhoto);

      const newObject = {
        user_id: id,
        amount: formData?.amount,
        voucherPhotoURL: publicURL,
        payment_date: formData?.currentDate,
        payment_type: formData?.paymentType,
        payment_status: "pending",
      };

      await createPayment(newObject);
      toast.success("Pago creado con éxito");
      navigate(-1);
    } catch (error) {
      setIsErrorForm(true);
      toast.error("Error al cargar el pago, intente nuevamente.");
    } finally {
      setIsLoadingForm(false);
    }
  };

  return {
    handleSubmit,
    handleInputChange,
    handleHideComponent,
    isLoadingForm,
    isOpenAnnounce,
    isErrorForm,
  };
}
