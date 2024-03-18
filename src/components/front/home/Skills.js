import React from 'react';
import {portfolio, skills} from "../../../../constants";
import PortfolioItem from "src/components/front/home/PortfolioItem";
import SkillItem from "src/components/front/home/SkillItem";
import Divider from "src/components/common/Divider";

const Skills = () => {
    return (
        <div className={'section '} id='skils'>

            <h1 className={'text-5xl lg:text-6xl text-center font-extrabold text-white/80 tracking-wider mt-5'}>My
                Skills</h1>


            <div className='skills w-full mt-10'>
                {skills.map((skill)=><SkillItem {...skill}/>)}

            </div>
            <Divider/>


        </div>

    );
};

export default Skills;