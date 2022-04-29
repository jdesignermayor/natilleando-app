import { useState } from "react";
import { useSimpleForm } from "./useSimpleForm";
import { useSupabase } from "./useSupabase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

export function useCreateCredit(){
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


  const handleHideComponent = () => {
    setIsOpenAnnounce(false);
  };


  const handleSubmit =async () =>{

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