import { Link } from "react-router-dom";


import ArrowLeft from "../../assets/icons/arrow-left.svg";
import { Button } from "../../components/Button";
import { useCreateCredit } from "../../hooks/useCreateCredit";
import { moneyFormat } from "../../utils/formats";

export const CreateCredit = () => {
  const {
    isOpenAnnounce,
    isLoadingForm,
    isErrorForm,
    handleSubmit,
    handleInputChange,
    paymentsSummary,
    totalValues
  } = useCreateCredit();

  return (
    <div className="px-5 lg:px-40 2xl:px-[30%] grid gap-5 font-gtultraFine pt-20">
      <Link
        to="/dashboard"
        className="font-black text-2xl flex gap-2 cursor-pointer"
      >
        <img src={ArrowLeft} width="30" alt="Come back" />
        Solitar crédito
      </Link>

      {isOpenAnnounce && (
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div>
              <p className="text-2xl">Cantidad disponible 🤑</p>
              <p className="text-4xl font-bold font-mono">
                {moneyFormat(totalValues.totalCredit)}
              </p>
            </div>
            <div>
              <p className="text-xl">Total ahorrado 💰</p>
              <p className="text-2xl font-bold font-mono">
                {moneyFormat(totalValues.total)}
              </p>
            </div>
            <div className="grid gap-4">
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
                  min="1000"
                  max={totalValues.totalCredit}
                  required
                />
              </div>
              <div className="grid md:flex md:justify-between gap-2">
                <div className="grid gap-2 w-full">
                  <label htmlFor="currentDate">
                    Selecciona la fecha de inicio
                  </label>
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
                <div className="grid gap-2 w-full">
                  <label htmlFor="currentDate">
                    Selecciona la fecha de finalización
                  </label>
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
              </div>
              <div>
                <div className="grid gap-2">
                  <label htmlFor="forma de pago">
                    Selecciona la periodicidad de pago
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
    </div>
  );
};
