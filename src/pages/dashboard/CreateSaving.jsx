import { useState } from "react";

import { useSimpleForm } from "../../hooks/useSimpleForm";
import { Link } from "react-router-dom";

import ArrowLeft from "../../assets/icons/arrow-left.svg";
import { Button } from "../../components/Button";
import { VisitAnnounce } from "../../components/VisitAnnounce";


export const CreateSaving = () => {
  const [isOpenAnnounce, setIsOpenAnnounce] = useState(true);

  const {
    formData,
    handleInputChange,
    isLoadingForm,
    isErrorForm,
    setIsLoadingForm,
    setIsErrorForm,
  } = useSimpleForm();

  const onHideComponent = () => {
    setIsOpenAnnounce(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
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
            buttonLabel="Ingresar abono"
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
              <label htmlFor="voucherPhoto">Selecciona el comprobante</label>
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
            </div>
            <Button type="submit">Aceptar</Button>
          </form>
        )}
      </div>
    </div>
  );
};
