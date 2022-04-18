import { useState } from 'react';

export const useSimpleForm = () => {
  const [formData, setFormData] = useState({});
  const [isLoadingForm, setIsLoadingForm] = useState(false);

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
    setIsLoadingForm,
  };
}
