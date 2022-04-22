import { useEffect } from 'react';
import { useSupabase } from '../../hooks/useSupabase';
import { useAuth } from '../../context/AuthContext';

import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { TransactionsHistoryTable } from '../../components/TransactionsHistoryTable';

export const Home = () => {
  const { getPaymentsById, payments, isLoading } = useSupabase();  
 
  const {
    state: { user },
  } = useAuth();

  const { id, name, surname } = user;

  const getPayments = () => {
    getPaymentsById(id);
  };

  useEffect(() => {
    console.table("payments:", payments);
  }, [payments]);

  return (
    <div className="px-5 lg:px-40 2xl:px-[30%] grid gap-5 font-gtultraFine pt-20">
      <h1 className="font-black text-2xl">
        Hola {name} {surname}
      </h1>
      <ul className="flex flex-col gap-4">
        <li>
          <div>
            <p className="font-bold text-3xl">Total ahorrado 💰</p>
            {/* <p className="text-2xl">$1.800.000</p> */}
            {payments.length <= 0 && (
              <Button
                icon="PAYMENT"
                isLoading={isLoading}
                primary={false}
                onHandleClick={getPayments}
              >
                Ver movimientos
              </Button>
            )}
            <TransactionsHistoryTable
              labelList={["Valor", "Estado", "Fecha"]}
              itemsList={payments}
            />
          </div>
        </li>
        {/* <li>
          <div className="text-base">
            <p className="font-bold text-2xl">Total natilleando</p>
            <div className="grid gap-3 grid-cols-1 divide-y pt-4">
              <div>
                <p>Total ahorro socios</p>
                <p className="font-bold">$1.800.000</p>
              </div>
              <div>
                <p>Total inscripcion socios</p>
                <p className="font-bold">$200.000</p>
              </div>
              <div>
                <p>Total rifas socios</p>
                <p className="font-bold">$200.000</p>
              </div>
              <div>
                <p>Total multas socios</p>
                <p className="font-bold">$200.000</p>
              </div>
            </div>
          </div>
        </li> */}
      </ul>
      <div className="grid lg:flex gap-2">
        <Link to="create-saving" className="w-full">
          <Button icon="ADD">Ingresar aporte</Button>
        </Link>
        <Link to="/" className="w-full">
          <Button icon="DEBT">Solicitar prestamo</Button>
        </Link>
      </div>
    </div>
  );
}
