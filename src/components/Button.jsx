
export const Button = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="bg-black text-white transition py-3 px-7 w-full hover:opacity-60 text-base font-gtultraFine"
    >
      {children}
    </button>
  );
};