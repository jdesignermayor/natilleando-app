import { useAuthentication } from "../../hooks/useAuthentication";
import { useEffect } from "react";
import { useSimpleForm } from "../../hooks/useSimpleForm";
import { useSupabase } from "../../hooks/useSupabase";

import { Button } from "../../components/Button";

export const SignIn = () => {
  const { members, validateLogin, getMembers } = useSupabase();
  const {
    formData,
    handleInputChange,
    isLoadingForm,
    isErrorForm,
    setIsLoadingForm,
    setIsErrorForm,
  } = useSimpleForm();

  const { onLogIn } = useAuthentication();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoadingForm(true);
    try {
      const dataUser = await validateLogin({
        id: formData?.userId,
        password: formData?.documentNumber,
      });

      onLogIn(dataUser);

      setIsLoadingForm(false);
      setIsErrorForm(false);
    } catch (error) {
      setIsLoadingForm(false);
      setIsErrorForm(true);
    }
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div className="pt-40 px-5 md:px-64 p-3 lg:px-96 2xl:px-[40%]">
      <form onSubmit={handleSubmit} className="grid gap-5 font-gtultraFine">
        <p className="text-4xl font-gtultraFine font-bold">Iniciar sesión</p>
        <div className="grid gap-2">
          <label htmlFor="userId">Selecciona el socio</label>
          <select
            id="userId"
            name="userId"
            aria-label="Selecciona el socio"
            alt="Selecciona el socio"
            className="appearance-none drop-shadow-none w-full outline-none rounded-none py-3 px-4 bg-slate-100 border-2 border-transparent focus:border-black"
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione su nombre</option>
            {members?.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <label htmlFor="documentNumber">
            Ingresa la clave (número de cédula)
          </label>
          <input
            type="number"
            id="documentNumber"
            name="documentNumber"
            aria-label="Ingresa tu cedula"
            alt="Ingresa tu cedula"
            placeholder="Ingresa tu cedula"
            className="appearance-none drop-shadow-none w-full outline-none rounded-none py-3 px-4 bg-slate-100 border-2 border-transparent focus:border-black"
            onChange={handleInputChange}
            pattern="[0-9]*"
            required
          />
        </div>
        {isErrorForm && (
          <p className="text-red-500 text-sm">Contraseña incorrecta</p>
        )}
        <Button type="submit" isLoading={isLoadingForm}>
          Iniciar sesión
        </Button>
      </form>
    </div>
  );
};
