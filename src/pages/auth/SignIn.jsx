import React from "react";
import { Button } from "../../components/Button";

export const SignIn = () => {
  return (
    <div className="pt-40 px-5 md:px-64 p-3 lg:px-96 2xl:px-[30%]">
      <form action="" className="grid gap-5 font-gtultraFine">
        <p className="text-4xl font-gtultraFine font-bold">Iniciar sesión</p>
        <div className="grid gap-2">
          <p>Selecciona el socio</p>
          <select
            name=""
            id=""
            className="w-full bg-slate-100 py-5 px-7 focus:bg-slate-200 hover:ring-4"
            required
          >
            <option className="p-5" value="">
              demo
            </option>
            <option className="p-5" value="">
              demo
            </option>
            <option className="p-5" value="">
              demo
            </option>
            <option className="p-5" value="">
              demo
            </option>
          </select>
        </div>
        <div className="grid gap-2">
          <p>Ingresa la clave (numero de cedula)</p>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu cedula"
            className="w-full bg-slate-100 py-4 px-7 focus:bg-slate-200 hover:ring-4"
            required
          />
        </div>
        <Button type="submit">Iniciar sesion</Button>
      </form>
    </div>
  );
};
