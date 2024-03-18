
import {portfolio} from "../../../../constants";
import PortfolioItem from "src/components/front/home/PortfolioItem";
import Divider from "src/components/common/Divider";


const Portfolio = () => {

    return (
        <div className={'portfolio-section opacity-0 translate-y-24 mt-10'} id={'portfolio'}>

            <h4 className={'text-md lg:text-lg text-primary/75 text-center font-thin uppercase tracking-wider'}>Over 5+ years of
                experience</h4>
            <h1 className={'text-5xl lg:text-6xl text-center font-extrabold text-white/80 tracking-wider mt-5'}>My Portfolio</h1>

            <div className="portfolios w-full mt-10">
                {portfolio.map((item,index)=>PortfolioItem({...item,index}))}
            </div>




            <Divider/>
        </div>
    );
};

export default Portfolio;