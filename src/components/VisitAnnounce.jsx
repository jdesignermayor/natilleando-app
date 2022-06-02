import { Button } from "../components/Button";

export const VisitAnnounce = ({
  imgURL,
  title,
  description,
  buttonLabel,
  onClick = () => {},
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-4 w-full bg-white">
      <img src={imgURL} width="300" alt={title} />
      <p className="text-5xl font-bold font-recoleta">{title}</p>
      <p>{description}</p>
      <Button
        onHandleClick={() => onClick()}
      >
        {buttonLabel}
      </Button>
    </div>
  );
};
