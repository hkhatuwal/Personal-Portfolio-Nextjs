import React from 'react';
import {portfolio, skills} from "../../../constants";
import PortfolioItem from "@/components/home/PortfolioItem";
import SkillItem from "@/components/home/SkillItem";
import Divider from "@/components/common/Divider";

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