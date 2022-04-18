
import { Spinning } from '../components/Spinning';

export const Button = ({ children, type = "button", isLoading = false}) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={`flex items-center justify-center bg-black text-white transition py-3 px-7 w-full hover:opacity-60 h-12 text-base font-gtultraFine ${
        isLoading && "bg-gray-300"
      }`}
    >
      {isLoading ? <Spinning /> : children}
    </button>
  );
};