import { Spinning } from "../components/Spinning";
import AddWhite from "../assets/icons/addWhite.svg";
import DebtIcon from "../assets/icons/credit-cardWhite.svg";
import EyeIcon from "../assets/icons/eye.svg";


const getIconProps = (icon) => {
  const anchorProps = {
    src: "",
    alt: "",
  };

  if (icon === "ADD") anchorProps.src = AddWhite;
  anchorProps.alt = "Agregar icono";

  if (icon === "DEBT") anchorProps.src = DebtIcon;
  anchorProps.alt = "Deuda icono";

  if (icon === "PAYMENT") anchorProps.src = EyeIcon;
  anchorProps.alt = "Pago icono";

  return anchorProps;
};

export const Button = ({
  children,
  type = "button",
  isLoading = false,
  icon = null,
  primary = true,
  disabled = false,
  onHandleClick = () => {},
}) => {
  const { src, alt } = getIconProps(icon);

  return (
    <button
      type={type}
      disabled={isLoading || disabled}
      onClick={onHandleClick}
      className={`flex gap-2 items-center justify-center ${
        primary ? "bg-black text-white" : " text-black border-2 border-black"
      }  transition py-3 px-7 w-full hover:opacity-60 h-12 text-base font-gtultraFine ${
        isLoading || disabled && "bg-gray-300"
      }`}
    >
      {!isLoading && icon && <img src={src} width="30" alt={alt} />}
      {isLoading ? <Spinning /> : children}
    </button>
  );
};
