import { Link } from "react-router-dom";
import { moneyFormat } from "../../utils/formats";

import { useEffect } from "react";
import { useSupabase } from "../../hooks/useSupabase";
import { useAuth } from "../../context/AuthContext";

import { Button } from "../../components/Button";
import { TransactionsHistoryTable } from "../../components/TransactionsHistoryTable";
import { PaymentsLoader } from "../../components/PaymentsLoader";
import { PaymentsSummary } from "../../components/PaymentsSummary";

export const Home = () => {
  const {
    getPaymentsById,
    getPaymensSummary,
    payments,
    paymentsSummary,
    isLoading,
    isLoadingSummary,
    isLoadingPayments,
  } = useSupabase();

  const {
    state: { user },
  } = useAuth();

  const { id, name, surname } = user;

  const getPayments = () => {
    getPaymentsById(id);
  };

  useEffect(() => {
    getPaymensSummary(id);
  }, []);

  return (
    <div className="px-5 lg:px-40 2xl:px-[30%] grid gap-5 font-gtultraFine pt-20">
      <h1 className="text-xl">
        Hola{" "}
        <span className="capitalize">
          {name} {surname} 👋
        </span>
      </h1>

      <ul className="flex flex-col gap-4">
        <li>
          <div className="flex flex-col gap-4">
            <p className="text-2xl">Total ahorrado 💰</p>
            {isLoadingSummary ? (
              <PaymentsSummary />
            ) : (
              <p className="text-4xl font-bold ">
                {moneyFormat(paymentsSummary.total)}
              </p>
            )}
            <div className="grid gap-4">
              <p className="text-2xl">Historial de ahorro 💸</p>
              {payments.length <= 0 && (
              <Button
                icon="PAYMENT"
                isLoading={isLoading}
                primary={false}
                onHandleClick={getPayments}
              >
                Ver historial
              </Button>
            )}

              {isLoadingPayments ? (
                <PaymentsLoader />
              ) : (
                <TransactionsHistoryTable
                  labelList={["Valor", "Estado", "Fecha"]}
                  itemsList={payments}
                />
              )}
            </div>
          </div>
        </li>
      </ul>
      {/* <div className="grid lg:flex gap-2">
        <Link to="create-saving" className="w-full">
          <Button icon="ADD">Ingresar aporte</Button>
        </Link>
        <Link to="/" className="w-full">
          <Button icon="DEBT">Solicitar prestamo</Button>
        </Link>
      </div> */}
    </div>
  );
};
