import { moneyFormat, dateFormat } from "../utils/formats";

import { Badge } from "../components/Badge";

export const TransactionsHistoryTable = ({ labelList, itemsList }) => {
  if (itemsList?.length > 0) {
    return (
      <table className="table-auto w-full pt-4 pb-4 font-gtultra ">
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
          {itemsList?.map(({ id, amount, payment_date, payment_status }) => {
            return (
              <tr key={id} className="bg-white border-b rounded">
                <th scope="row" className="px-2 py-2  text-gray-900">
                  <p className="font-bold">{moneyFormat(amount)}</p>
                </th>
                <th
                  scope="row"
                  className="px-2 py-2 font-medium text-gray-900 "
                >
                  {payment_status === "verifed" ? (
                    <Badge color="success" name="Verificado" />
                  ) : (
                    <Badge color="danger" name="Pendiente" />
                  )}
                </th>
                <th
                  scope="row"
                  className="px-2 py-2 font-medium text-gray-900 "
                >
                  {dateFormat(payment_date)}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return null;
  }
};
