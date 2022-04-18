import React from "react";
import Photo from "../assets/images/foto.jpg";

export const LandinngFooter = () => {
  return (
    <div className="flex bottom-0 w-full bg-black text-white gap-4 items-center px-5 md:px-64 p-3 lg:px-96 2xl:px-[30%] font-gtultraFine">
      <div>
        <img
          src={Photo}
          className="rounded-full w-40 lg:w-10"
          alt="No te quedes peleado!"
        />
      </div>
      <div>
        <p className="text-sm">
          👋 ¡Hola! La plataforma fue creada por mi persona{" "}
          <a
            className="underline text-primaryLight"
            href="https://www.linkedin.com/in/joseacevedodev/"
          >
            Jose Luis Pulgarín
          </a>
          , si te gusta la iniciativa por favor no dudes en compartirlo con tus
          familiares de confianza o amigos cercanos 💕.
        </p>
      </div>
    </div>
  );
};
