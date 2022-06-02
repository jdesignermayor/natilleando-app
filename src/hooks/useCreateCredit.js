import { useState, useEffect } from "react";
import { useSimpleForm } from "./useSimpleForm";
import { useSupabase } from "./useSupabase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { calculateTotal } from "../utils/calculator";

export function useCreateCredit(){
  const [isOpenAnnounce, setIsOpenAnnounce] = useState(true);
  const [totalValues, setTotalValues] = useState({
    total: 0,
    totalCredit: 0,
  });
  
  const navigate = useNavigate();
  const { paymentsSummary, getPaymensSummary } = useSupabase();


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

  const handleHideComponent = () => {
    setIsOpenAnnounce(false);
  };

  const handleSubmit = async () => {};

  useEffect(() => {
    getPaymensSummary(id);
  }, []);

  useEffect(() => {
    const total = paymentsSummary?.total;
    const totalCredit = calculateTotal(paymentsSummary?.total);

    setTotalValues({
      total,
      totalCredit,
    });
  }, [paymentsSummary]);

  return {
    handleSubmit,
    handleInputChange,
    handleHideComponent,
    isLoadingForm,
    isOpenAnnounce,
    isErrorForm,
    formData,
    totalValues,
  };

}    