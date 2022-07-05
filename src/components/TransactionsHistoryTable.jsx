import { moneyFormat, dateFormat } from "../utils/formats";

import { Badge } from "../components/Badge";
import { Button } from "./Button";

import { useSupabase } from "../hooks/useSupabase";

export const TransactionsHistoryTable = ({ title, labelList, itemsList }) => {
  const { aprovePayment, getLastPayments } = useSupabase();

  const updatePayment = (id) => {
    aprovePayment(id);
    getLastPayments();
  };

  if (itemsList?.length > 0) {
    return (
      <>
        {title && <h3 className="text-xl">{title}</h3>}
        <div className="overflow-auto">
          <table className="w-full h-5 overflow-y-auto pt-4 pb-4 font-gtultra border">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr className=" border-b">
                {labelList?.map((name, index) => {
                  return (
                    <th key={index} scope="col" className="px-6 py-3">
                      {name}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {itemsList?.map(
                ({
                  id,
                  amount,
                  payment_date,
                  username,
                  voucher_photo,
                  payment_status,
                }) => {
                  const status =
                    payment_status === "verified"
                      ? { color: "success", name: "Verificado" }
                      : { color: "error", name: "Sin verificar" };

                  return (
                    <tr key={id} className="bg-white border-b rounded">
                      <th scope="row" className="px-2 py-2  text-gray-900">
                        <p className="font-bold">{moneyFormat(amount)}</p>
                      </th>
                      <th
                        scope="row"
                        className="px-2 py-2 font-medium text-gray-900 "
                      >
                        <Badge color={status.color} name={status.name} />
                      </th>
                      {username && (
                        <th
                          scope="row"
                          className="px-2 py-2 font-medium text-gray-900 "
                        >
                          {username}
                        </th>
                      )}
                      {voucher_photo && username ? (
                        <th
                          scope="row"
                          className="px-2 py-2 font-medium text-gray-900 "
                        >
                          <a
                            href={voucher_photo}
                            className="text-green-800"
                            alt="Ver adjunto"
                            target="_blank"
                          >
                            Ver adjunto
                          </a>
                        </th>
                      ) : (
                        <th
                          scope="row"
                          className="px-2 py-2 font-medium text-gray-900 "
                        >
                          <p>Sin adjunto</p>
                        </th>
                      )}
                      {payment_date && (
                        <th
                          scope="row"
                          className="px-2 py-2 font-medium text-gray-900 "
                        >
                          {payment_date
                            ? dateFormat(payment_date)
                            : payment_date}
                        </th>
                      )}
                      {labelList.includes("Opciones") && (
                        <th scope="row" className="px-2 py-2 ">
                          <Button
                            icon="ADD"
                            disabled={payment_status === "verified"}
                            onHandleClick={() => updatePayment(id)}
                          >
                            Aprovar
                          </Button>
                        </th>
                      )}
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </>
    );
  } else {
    return null;
  }
};
