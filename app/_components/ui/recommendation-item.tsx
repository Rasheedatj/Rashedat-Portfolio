import React from 'react';
import { ReccommendationI } from '../core/reccommendations';

const RecommendationItem = ({ recc }: { recc: ReccommendationI }) => {
  const { description, title, name } = recc;
  return (
    <div className='group hover:bg-white/4 border border-none hover:border-text-slate-100 px-6 py-4 rounded-md'>
      <q className='text-slate-400 leading-7 italic selection:bg-accent selection:text-slate-200"'>
        {description}
      </q>

      <p className='mt-2 text-end group-hover:text-accent'>
        {name} <span className='text-xs px-1'> &bull;</span>
        {title}
      </p>
    </div>
  );
};

export default RecommendationItem;
