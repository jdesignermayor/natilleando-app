import { useAuth } from '../../context/AuthContext';
import { useSupabase } from '../../hooks/useSupabase';
import { useSimpleForm } from '../../hooks/useSimpleForm';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

export const SignIn = () => {
  const { members, validateLogin } = useSupabase();
  const { formData, handleInputChange, isLoadingForm, setIsLoadingForm, isErrorForm, setIsErrorForm } =
    useSimpleForm();

  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoadingForm(true);
    try {
      const dataUser = await validateLogin({
        id: formData?.userId,
        password: formData?.documentNumber,
      });

      dispatch({ type: "loggedIn", user: { ...dataUser } });
      navigate("/dashboard");

      setIsLoadingForm(false);
      setIsErrorForm(false);
    } catch (error) {
      setIsLoadingForm(false);
      setIsErrorForm(true);
    }
  };

  return (
    <div className="pt-40 px-5 md:px-64 p-3 lg:px-96 2xl:px-[30%]">
      <form onSubmit={handleSubmit} className="grid gap-5 font-gtultraFine">
        <p className="text-4xl font-gtultraFine font-bold">Iniciar sesión</p>
        <div className="grid gap-2">
          <label htmlFor="userId">Selecciona el socio</label>
          <select
            id="userId"
            name="userId"
            className="w-full bg-slate-100 py-5 px-7 focus:bg-slate-200 hover:ring-4 appearance-none"
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
            placeholder="Ingresa tu cedula"
            className="w-full bg-slate-100 py-4 px-7 focus:bg-slate-200 hover:ring-4 text-base"
            onChange={handleInputChange}
            pattern="[0-9]*"
            required
          />
        </div>
        { isErrorForm && <p className="text-red-500 text-sm">Contraseña incorrecta</p> }
        <Button type="submit" isLoading={isLoadingForm}>
          Iniciar sesion
        </Button>
      </form>
    </div>
  );
}
