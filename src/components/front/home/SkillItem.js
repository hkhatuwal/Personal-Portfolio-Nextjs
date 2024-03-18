import React from 'react';

const SkillItem = ({title, percent, fromColor, toColor}) => {
    return (
        <div key={title} className={'py-2'}>
            <div className={'flex justify-between'}>
                <h3 className={'text-white/60 py-1 uppercase tracking-wider text-xs'}>{title}</h3>
                <h3 className={'text-white/60 py-1 uppercase tracking-wider text-xs'}>{percent}%</h3>

            </div>
            <div className={'bg-gray-400/20 rounded-lg'}>
                <div
                    className={`skill h-2  rounded-lg  `}
                        style={{width: `${percent}%`,backgroundImage:`linear-gradient(to right,${fromColor} 20%, ${toColor})`}}></div>

            </div>
        </div>
    );
};

export default SkillItem;