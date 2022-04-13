import React from 'react'
import { landingData } from '../utils/landing';

import { TopicItem } from '../components/TopicItem';

export const TopicItemContainer = () => {
    const { items } = landingData;
    return (
        <div className='mt-48 grid gap-48'>
            {items?.map((props) => <TopicItem key={props.id} {...props} />)}
        </div>
        )
    }
    