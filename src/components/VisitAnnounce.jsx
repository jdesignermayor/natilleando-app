export const VisitAnnounce = ({
  imgURL,
  title,
  description,
  buttonLabel,
  onClick = () => {},
}) => {
  return (
    <div className="grid gap-4 w-full bg-white">
      <img src={imgURL} width="300" alt={title} />
      <p className="text-5xl font-bold font-recoleta">{title}</p>
      <p>{description}</p>
      <button
        onClick={() => onClick()}
        className="flex text-2xl justify-center items-center bg-black hover:opacity-70 transition text-white px-3 py-2 rounded-md"
      >
        {buttonLabel}
      </button>
    </div>
  );
};
