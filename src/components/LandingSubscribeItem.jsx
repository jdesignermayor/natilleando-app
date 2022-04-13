import React from 'react'
import { landingData } from '../utils/landing';
import { Markup } from 'interweave';

import Illustration from '../assets/images/KeynoteButt.gif';
import Roket from '../assets/icons/rocketWhite.svg';

export const LandingSubscribeItem = () => {
    const {  title, href, description, icon } = landingData.subscribeItem;
    return (
        <div className='grid gap-6 pb-20' id={href}>
            <img src={Illustration} width="350" alt="" />
            <p className='text-5xl font-bold font-recoleta'>{title}<span className='text-3xl'>{icon}</span></p>
            {description && <Markup content={description} />}
            <button className='flex text-2xl justify-center items-center bg-black hover:opacity-70 transition text-white px-3 py-2 rounded-md'>
                <img src={Roket} width="30" alt="Ser socio" />
                Quiero ser socio
            </button>
        </div>
        )
    }
    