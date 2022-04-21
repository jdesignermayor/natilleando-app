import { useState } from 'react';

export function useSimpleForm() {
  const [formData, setFormData] = useState({});
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [isErrorForm, setIsErrorForm] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return {
    formData,
    handleInputChange,
    isLoadingForm,
    isErrorForm,
    setIsLoadingForm,
    setIsErrorForm,
  };
}
