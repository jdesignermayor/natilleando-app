import { Link } from "react-router-dom";
import { moneyFormat } from "../../utils/formats";

import { useEffect } from "react";
import { useSupabase } from "../../hooks/useSupabase";
import { useAuth } from "../../context/AuthContext";

import { Button } from "../../components/Button";
import { TransactionsHistoryTable } from "../../components/TransactionsHistoryTable";
import { PaymentsLoader } from "../../components/PaymentsLoader";
import { PaymentsSummaryLoader } from "../../components/PaymentsSummaryLoader";

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
    <main className="px-2 lg:px-40 2xl:px-[30%] grid gap-5 pt-20  font-gtultraFine">
      <h1 className="text-xl">
        Hola{" "}
        <span className="capitalize font-bold">
          {name} {surname} 👋
        </span>
      </h1>

      <ul className="flex flex-col gap-4">
        <li>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-2xl">Total ahorrado 💰</p>
              {isLoadingSummary ? (
                <PaymentsSummaryLoader />
              ) : (
                <p className="text-4xl font-bold font-mono ">
                  {moneyFormat(paymentsSummary?.total)}
                </p>
              )}
            </div>
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
      <div className="grid lg:flex gap-2">
        <Link to="create-saving" className="w-full">
          <Button icon="ADD">Ingresar ahorro</Button>
        </Link>
        {/* <Link to="create-credit" className="w-full">
          <Button icon="DEBT">Solicitar crédito</Button>
        </Link> */}
      </div>
    </main>
  );
};
