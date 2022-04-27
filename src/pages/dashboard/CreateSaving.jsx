import { useState } from "react";
import { useSimpleForm } from "../../hooks/useSimpleForm";
import { useSupabase } from "../../hooks/useSupabase";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import ArrowLeft from "../../assets/icons/arrow-left.svg";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { VisitAnnounce } from "../../components/VisitAnnounce";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CreateSaving = () => {
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

  const onHideComponent = () => {
    setIsOpenAnnounce(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoadingForm(true);
    try {
      const { data: uploadData } = await uploadImage(formData?.voucherPhoto);

      const newObject = {
        user_id: id,
        amount: formData?.amount,
        voucherPhotoURL: uploadData?.publicURL,
        payment_date: formData?.currentDate,
        payment_type: formData?.paymentType,
        payment_status: "pending",
      };

      await createPayment(newObject);
      toast.success('Pago creado con éxito');
      navigate("/dashboard");

    } catch (error) {
      setIsErrorForm(true);
      toast.error('Error al cargar el pago, intente nuevamente.');
    } finally {
      setIsLoadingForm(false);
    }
  };

  return (
    <div className="px-5 lg:px-40 2xl:px-[30%] grid gap-5 font-gtultraFine pt-20">
      <Link
        to="/dashboard"
        className="font-black text-2xl flex gap-2 cursor-pointer"
      >
        <img src={ArrowLeft} width="30" alt="Come back" />
        Ingresar aporte
      </Link>
      <div className="grid gap-6 pb-20">
        {isOpenAnnounce && (
          <VisitAnnounce
            imgURL="https://wixtzvsuyxagezjctvdb.supabase.co/storage/v1/object/public/bucket/streamline-icon-startup-3@400x400.PNG"
            title="Ahorrar es importante"
            description="Cada que haces un aporte crece tu hábito al ahorro y aportas a que el
      proyecto siga avanzando ¡MUCHAS GRACIAS!"
            buttonLabel="Continuar"
            localStorageId="CREATE_SAVING"
            onClick={onHideComponent}
          />
        )}

        {!isOpenAnnounce && (
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label htmlFor="amount">Ingresar valor de aporte</label>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="Ingresa el valor"
                onChange={handleInputChange}
                className="appearance-none drop-shadow-none w-full outline-none rounded-none py-3 px-4 bg-slate-100 border-2 border-transparent focus:border-black"
                pattern="[0-9]*"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="currentDate">Selecciona la fecha</label>
              <input
                type="date"
                id="currentDate"
                name="currentDate"
                placeholder="Ingresa tu cedula"
                onChange={handleInputChange}
                className="appearance-none drop-shadow-none w-full outline-none rounded-none py-3 px-4 bg-slate-100 border-2 border-transparent focus:border-black"
                pattern="[0-9]*"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="voucherPhoto">
                Selecciona el comprobante (Solo se permiten imagenes en formato
                PNG, JPG, JPEG)
              </label>
              <input
                type="file"
                id="voucherPhoto"
                name="voucherPhoto"
                placeholder="Ingresa tu cedula"
                onChange={handleInputChange}
                className="appearance-none drop-shadow-none w-full block file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 outline-none rounded-none py-3 px-4 bg-slate-100 border-2 border-transparent focus:border-black"
                pattern="[0-9]*"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="documentNumber">
                Selecciona el medio de pago
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentType"
                  className="form-radio h-5 w-5"
                  value="2"
                  onChange={handleInputChange}
                  required
                />
                Nequi o Bancolombia
              </label>
              <label className="flex items-center gap-2 form-check">
                <input
                  type="radio"
                  name="paymentType"
                  className="form-radio h-5 w-5"
                  value="1"
                  onChange={handleInputChange}
                />
                Efectivo
              </label>
            </div>
            <Button type="submit" isLoading={isLoadingForm}>
              Aceptar
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
