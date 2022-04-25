import React from "react";
import { Button } from "../../components/Button";
import { PaymentsContainer } from "../../components/PaymentsContainer";

export const CreateSaving = () => {
  return (
    <div className="px-5 lg:px-40 2xl:px-[30%] grid gap-5 font-gtultraFine pt-20">
      <h1 className="font-black text-2xl">Ingresar aporte</h1>
      <form>
        <div className="grid gap-2">
          <label htmlFor="documentNumber">Ingresar valor de aporte</label>
          <input
            type="number"
            id="documentNumber"
            name="documentNumber"
            placeholder="Ingresa el valor"
            className="w-full bg-slate-100 py-4 px-7 focus:bg-slate-200 hover:ring-4 text-base"
            pattern="[0-9]*"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="documentNumber">Selecciona la fecha</label>
          <input
            type="date"
            id="documentNumber"
            name="documentNumber"
            placeholder="Ingresa tu cedula"
            className="w-full bg-slate-100 py-4 px-7 focus:bg-slate-200 hover:ring-4 text-base"
            pattern="[0-9]*"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="documentNumber">Selecciona el comprobante</label>
          <input
            type="file"
            id="documentNumber"
            name="documentNumber"
            placeholder="Ingresa tu cedula"
            className="w-full bg-slate-100 py-4 px-7 focus:bg-slate-200 hover:ring-4 text-base"
            pattern="[0-9]*"
            required
          />
        </div>
        <div>
          <PaymentsContainer />
        </div>
        <div className="grid gap-2">
          <label htmlFor="documentNumber">Selecciona el banco</label>
        </div>
        <Button>Aceptar</Button>
      </form>
    </div>
  );
};
