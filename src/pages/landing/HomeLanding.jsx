import React from 'react';

import { TopicButtonsContainer } from '../../components/TopicButtonsContainer';
import { TopicItemContainer } from '../../components/TopicItemContainer';
import { LandinngFooter } from '../../components/LandingFooter';
import { LandingSubscribeItem } from '../../components/LandingSubscribeItem';

export const HomeLanding = () => {
  return (
    <>
      <div className='px-5 md:px-64 p-3 lg:px-96 2xl:px-[30%] grid gap-9 font-gtultraFine pt-10'>
        <div className='flex flex-col gap-5 h-screen justify-center text-center md:text-left 2xl:text-center'>
          <div className='text-7xl lg:text-8xl 2xl:text-9xl font-black'>
            <p>Ahorra</p>
            <p>de forma correcta</p>
          </div>
          <p className='text-xl'>Natilleando es un simple fondo de ahorro para miembros exclusivos que tiene como
          propósito crear un ahorro programado a través del tiempo con un porcentaje de rentabilidad anual.</p>
          <TopicButtonsContainer />
        </div>
        <TopicItemContainer />
        <LandingSubscribeItem  />
      </div>
      <LandinngFooter />
    </>
  )
}
