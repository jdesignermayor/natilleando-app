import { moneyFormat, dateFormat } from "../utils/formats";

import { Badge } from "../components/Badge";

export const TransactionsHistoryTable = ({ title, labelList, itemsList }) => {
  if (itemsList?.length > 0) {
    return (
      <>
        {title && <h3 className="text-xl">{title}</h3>}
        <div class="overflow-auto">
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
                  return (
                    <tr key={id} className="bg-white border-b rounded">
                      <th scope="row" className="px-2 py-2  text-gray-900">
                        <p className="font-bold">{moneyFormat(amount)}</p>
                      </th>
                      <th
                        scope="row"
                        className="px-2 py-2 font-medium text-gray-900 "
                      >
                        {payment_status === "verified" ? (
                          <Badge color="success" name="Verificado" />
                        ) : (
                          <Badge color="danger" name="Pendiente" />
                        )}
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
