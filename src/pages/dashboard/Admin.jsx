import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useSupabase } from "../../hooks/useSupabase";

import { TransactionsHistoryTable } from "../../components/TransactionsHistoryTable";
import { Cardvalue } from "../../components/Cardvalue";

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
          <Cardvalue
            title="💰Total ahorro verificado"
            value={allSummary?.total_verified}
          />
          <Cardvalue
            title="😒Total ahorro sin verificar"
            value={allSummary?.total_unverified}
          />
        </div>
        <Cardvalue
          title="🏦Total ahorro personal"
          value={paymentsSummary?.total}
        />
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
