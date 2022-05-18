import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useSupabase } from "../../hooks/useSupabase";

import { TransactionsHistoryTable } from "../../components/TransactionsHistoryTable";
import { PaymentsSummaryLoader } from "../../components/PaymentsSummaryLoader";

import { moneyFormat } from "../../utils/formats";

export const Admin = () => {
  const {
    state: { user },
  } = useAuth();

  const { id, name, surname } = user;
  const {
    getLastPayments,
    getPaymensSummary,
    getAllSummary,
    lastPayments,
    allSummary,
    paymentsSummary,
    isLoadingSummary,
  } = useSupabase();

  useEffect(() => {
    getLastPayments();
    getPaymensSummary(id);
    getAllSummary();
  }, []);

  return (
    <main className="px-2 lg:px-40 2xl:px-[30%] grid gap-5 pt-20  font-gtultraFine">
      <h1 className="text-xl">
        Hola{" "}
        <span className="capitalize font-bold">
          {name} {surname} 👋
        </span>
      </h1>

      <div className="flex flex-col gap-2">
        <div className="grid md:flex gap-3">
          <div className="grid items-center border p-7 w-full">
            <p className="text-2xl">💰Total ahorro verificado</p>
            {allSummary?.total_verified ? (
              <p className="text-4xl font-bold font-mono">
                {moneyFormat(allSummary?.total_verified)}
              </p>
            ) : (
              <PaymentsSummaryLoader />
            )}
          </div>
          <div className="grid items-center border p-7 w-full">
            <p className="text-2xl">Total ahorro sin verificar</p>
            {allSummary?.total_unverified ? (
              <p className="text-4xl font-bold font-mono">
                {moneyFormat(allSummary?.total_unverified)}
              </p>
            ) : (
              <p className="text-4xl font-bold font-mono ">0</p>
            )}
          </div>
        </div>

        <div className="border p-7">
          <p className="text-2xl">🏦Total ahorro personal</p>
          {isLoadingSummary ? (
            <PaymentsSummaryLoader />
          ) : (
            <p className="text-4xl font-bold font-mono ">
              {moneyFormat(paymentsSummary?.total)}
            </p>
          )}
        </div>
        <Link to="create-saving" className="w-full">
          <Button icon="ADD">Ingresar ahorro</Button>
        </Link>
      </div>
      <TransactionsHistoryTable
        title="Historial de pagos"
        labelList={["Valor", "Estado", "Socio", "Adjunto", "Fecha"]}
        itemsList={lastPayments}
      />
    </main>
  );
};
