import { Spinning } from "../components/Spinning";
import AddWhite from "../assets/icons/addWhite.svg";
import DebtIcon from "../assets/icons/credit-cardWhite.svg";
import EyeIcon from "../assets/icons/eye.svg";

const IconType = (type) => {
  switch (type) {
    case "ADD": {
      return <img src={AddWhite} width="30" alt="Add icon" />;
    }

    case "DEBT": {
      return <img src={DebtIcon} width="30" alt="Debt icon" />;
    }

    case "PAYMENT": {
      return <img src={EyeIcon} width="30" alt="Debt icon" />;
    }

    default:
      return null;
  }
};

export const Button = ({
  children,
  type = "button",
  isLoading = false,
  icon = null,
  primary = true,
  onHandleClick = () => { console.log('clicked')},
}) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      onClick={onHandleClick}
      className={`flex gap-2 items-center  justify-center ${
        primary ? "bg-black text-white" : " text-black border border-black"
      }  transition py-3 px-7 w-full hover:opacity-60 h-12 text-base font-gtultraFine ${
        isLoading && "bg-gray-300"
      }`}
    >
      {!isLoading && icon && IconType(icon)}
      {isLoading ? <Spinning /> : children}
    </button>
  );
};
