import { PaymentsSummaryLoader } from "./PaymentsSummaryLoader";
import { moneyFormat } from "../utils/formats";

export const Cardvalue = ({ title, value }) => {
  return (
    <div className="grid items-center border p-7 w-full">
      <p className="text-2xl">{title}</p>
      {value ? (
        <p className="text-4xl font-bold font-mono">{moneyFormat(value)}</p>
      ) : (
        <PaymentsSummaryLoader />
      )}
    </div>
  );
};
