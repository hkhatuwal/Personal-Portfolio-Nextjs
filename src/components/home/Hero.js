import React from 'react';
import {heroItems} from "../../../constants";
import HeroItem from "@/components/home/HeroItem";
const Hero = () => {
    return (
        <div className="flex  justify-center items-center lg:h-[90vh] w-full  " id={'about'}>
            <div className="flex flex-col-reverse  lg:flex-row w-full  gap-11  ">

                {/* Text details */}

                <div className={'flex-1  lg:flex-[10] hover flex flex-col gap-5  justify-between '}>
                    <div className={"card hero-top-details p-10 flex flex-col gap-y-5 "}>

                        <img src={"/images/user_effect.png"} height={70} width={70}/>
                        <h2 className={'font-bold text-white lg:text-5xl text-3xl tracking-widest leading-relaxed'}>
                            Hi, I’m <span className='text-primary '>HIMANSHU</span>
                        </h2>
                        <h5 className={'text-white/70 text-lg '}>Web designer and developer working .</h5>


                        <ul className='flex flex-col gap-y-4'>

                            {heroItems.map((item) =>HeroItem(item))}
                        </ul>
                    </div>
                    <div className={"card p-10 hero-bottom-details"}>
                        <h4 className={'text-white/70 font-light'}>Download my curriculum vitae:</h4>
                        <div className="flex flex-row mt-3 justify-between">
                            <button className={'bg-bg p-3 btn-action text-xs text-primary  tracking-widest hover '}>DOWNLOAD C.V
                            </button>
                            <button className={'bg-bg btn-action p-3 text-xs text-primary  tracking-widest hover '}>CONTACT ME
                            </button>
                        </div>
                    </div>

                </div>



                {/* Person image container*/}
               <div className={'hero-image flex-1 lg:flex-[12] col-start-1 row-start-1 lg:row-start-auto lg:col-start-auto'}>
                   <div
                       className="h-full hover   bg-bg p-5  card  ">
                       <div className="image  w-full h-[300px] md:h-[400px] lg:h-full relative ">
                           <img src={"/images/banner-02.png"} className='h-full w-full object-cover rounded absolute'/>
                       </div>

                   </div>
               </div>
            </div>
        </div>

    );
};

export default Hero;