import { Markup } from 'interweave';

export const TopicItem = ({ imgURL, title, description, icon, subItems, href}) => {  
  return (
    <div className='text-xl grid gap-6 pt-4' id={href}>
      <img src={imgURL} width="300" alt="" />
      <p className='text-5xl font-bold font-recoleta'>{title}<span className='text-3xl'>{icon}</span></p>
      {description && <Markup content={description} />}
      <ol className='list-disc px-6 space-y-4'>
        {subItems.length > 0 && subItems?.map(({id, label}) => <li key={id}>{label}</li>)}
      </ol>
    </div>
    )
  }
  