import React from 'react';
import styles from '../style';
import { resume } from '../assets';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ml-0 ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]'>
          AI自动 <br className='sm:block hidden' /> <span className='text-gradient'>翻译 + 排版</span>
        </h1>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full'>中文简历.</h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
      一站式服务平台，重新定义“机翻”<br/>
      Powered by GPT-4        
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={resume} alt="billing" className='w-[200%] h-[90%] object-fill relative z-[5]' />


      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
    </div>
  </section>
);

export default Hero;
