import { useCreateCredit } from "../../hooks/useCreateCredit";
import React from 'react'
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { VisitAnnounce } from "../../components/VisitAnnounce";


export const CreateCredit = () => {
  const {
    isOpenAnnounce,
    isLoadingForm,
    isErrorForm,
    handleSubmit,
    handleInputChange,
  } = useCreateCredit();





  return (
    <div className="px-5 lg:px-40 2xl:px-[30%] grid gap-5 font-gtultraFine pt-20">
      <h1 className="font-black text-2xl">Solitar crédito</h1>

      {isOpenAnnounce && (
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid lg:flex gap-2">
            <p className="text-2xl">Total ahorrado 💰</p>
            <p className="text-4xl font-bold ">
              {'10.000.000'}
            </p>
            <br></br><br></br>
            <p className="text-2xl">Cantidad disponible para el credito💰</p>
            <p className="text-4xl font-bold ">
              {'7.500.000'}
            </p>
          </div>
          <div className="grid lg:flex gap-2">
            <p className="text-2xl">Nombre</p>
            <p className="text-2xl font-bold ">
              {'Lorenzo Chimeno'}
            </p>
            <br></br><br></br>
            <p className="text-2xl">Cédula</p>
            <p className="text-2xl font-bold ">
              {'45655011'}
            </p>
          </div>
          <br></br><br></br>
          <div className="grid lg:flex gap-2">
            <div className="grid gap-2">
              <label htmlFor="amount">Ingresa el valor del crédito</label>
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
            <br></br><br></br>
            <div className="grid gap-2">
              <label htmlFor="currentDate">Selecciona la fecha de inicio</label>
              <input
                type="date"
                id="currentDate"
                name="currentDate"
                placeholder="Fecha de inicio"
                onChange={handleInputChange}
                className="appearance-none drop-shadow-none w-full outline-none rounded-none py-3 px-4 bg-slate-100 border-2 border-transparent focus:border-black"
                pattern="[0-9]*"
                required
              />
            </div>
            <br></br>
            <div className="grid gap-2">
              <label htmlFor="currentDate">Selecciona la fecha de finalización</label>
              <input
                type="date"
                id="currentDate"
                name="currentDate"
                placeholder="echa de finalización"
                onChange={handleInputChange}
                className="appearance-none drop-shadow-none w-full outline-none rounded-none py-3 px-4 bg-slate-100 border-2 border-transparent focus:border-black"
                pattern="[0-9]*"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="forma de pago">
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
                Mensual
              </label>
              <label className="flex items-center gap-2 form-check">
                <input
                  type="radio"
                  name="paymentType"
                  className="form-radio h-5 w-5"
                  value="1"
                  onChange={handleInputChange}
                />
                Total
              </label>
            </div>
          </div>
          {isErrorForm && (
            <p className="text-red-500 text-sm">
              Ocurrió algún error, por favor válida los datos.
            </p>
          )}

          <Button type="submit" isLoading={isLoadingForm}>
            Aceptar
          </Button>
        </form>
      )}
      <div className="grid lg:flex gap-2">
        <p className="text-1xl font-bold">Condiciones del crédito:</p>
      </div>
      <div className="grid lg:flex gap-2">
        <ul className="list-disc">
          <li>
            Una vez estudiada la solicitud del credito y sí cumple con las normas establecidas para la solicitud del credito, será informado al solicitante de la concesión o negación del crédito.
          </li>
          <li>
            Una vez estudiada la solicitud del credito y sí cumple con las normas establecidas para la solicitud del credito, será informado al solicitante de la concesión o negación del crédito.
          </li>
          <li>
            La devolución del credito, sé realizará en el periodo de tiempo seleccionado por el socio, y se realizará los cinco primeros dias de cada mes junto con la cuota de ahorro.
          </li>
        </ul>
      </div>

    </div>
  )
};
