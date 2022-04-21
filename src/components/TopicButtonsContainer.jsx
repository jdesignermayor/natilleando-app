import React from 'react';
import { TopicButton } from '../components/TopicButton';
import { landingData } from '../data/landing';

export const TopicButtonsContainer = () => {
    const { buttonsCover } = landingData;
    
    return (
        <div className='grid grid-cols-2 gap-2'>
            {buttonsCover?.map((props) => <TopicButton key={props.id} {...props} />)}
        </div>
    )
}
