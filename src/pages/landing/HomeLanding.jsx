import React from 'react';

import { TopicButtonsContainer } from '../../components/TopicButtonsContainer';
import { TopicItemContainer } from '../../components/TopicItemContainer';
import { LandinngFooter } from '../../components/LandingFooter';
import { LandingSubscribeItem } from '../../components/LandingSubscribeItem';

export const HomeLanding = () => {
  return (
    <>
      <main className="px-5 md:px-64 p-3 lg:px-96 2xl:px-[30%] grid gap-9 font-gtultraFine pt-10">
        <article className="flex flex-col gap-5 h-screen justify-center text-center">
          <div className="text-6xl lg:text-7xl 2xl:text-9xl font-black text-center">
            <h1>
              Ahorra <br /> de forma <br /> correcta
            </h1>
          </div>
          <h2 className="text-lg text-center">
            Natilleando es un simple fondo de ahorro para miembros exclusivos
            que tiene como propósito crear un ahorro programado a través del
            tiempo.
          </h2>
          <TopicButtonsContainer />
        </article>
        <TopicItemContainer />
        <LandingSubscribeItem />
      </main>
      <LandinngFooter />
    </>
  );
}
