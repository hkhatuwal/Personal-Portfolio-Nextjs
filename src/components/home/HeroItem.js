import React from 'react';

const HeroItem = (item) => {
    return (
        <li key={item.title}
            className='text-white/70  flex items-center text-sm gap-x-2'><span
            className={'text-primary'}>{item.Icon}</span>
            <span className={'mt-1'}>{item.title}</span>
        </li>
    );
};

export default HeroItem;