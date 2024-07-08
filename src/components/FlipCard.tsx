import { h } from 'preact';
import { useState } from 'preact/hooks';
import '../styles/global.css';
import type { string } from 'astro/zod';

const FlipCard = ({
  title,
  description,
  backText,
  backText2,
}: {
  title: string;
  description: string;
  backText: string;
  backText2?: string;
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flip-card text-black ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className='flip-card-inner'>
        <div className='flip-card-front p-4 grid grid-rows-6 text-white bg-red-500 border-2 border-gray-950 shadow-lg rounded-xl group hover:bg-red-50 hover:text-black hover:scale-105 duration-700'>
          <div>
            <h2 className='text-base md:text-2xl lg:text-4xl 2xl:text-5xl font-black'>{title}</h2>
          </div>
          <div className=' row-span-4'>
            <p className='text-xs md:text-base lg:text-xl 2xl:text-3xl italic'>{description}</p>
          </div>
          <div>
            <button className='bg-red-700 group-hover:bg-red-800 group-hover:text-white duration-700 border-[1px] border-white p-3 rounded-lg text-xs md:text-base lg:text-xl 2xl:text-3xl bottom-4 '>
              Ver interpreacion
            </button>
          </div>
        </div>
        <div className='flip-card-back px-2 border-2 border-red-500 rounded-xl group grid grid-rows-6 p-2'>
          <div>
            <h1 className='text-base md:text-2xl lg:text-4xl 2xl:text-5xl font-black text-red-500 mb-1'>
              INTERPRETACIÓN
            </h1>
          </div>
          <div className=' row-span-4'>
            <p className='text-xs md:text-sm lg:text-base 2xl:text-xl  text-red-500'>{backText}</p>
            {backText2 && <p className='text-xs md:text-sm lg:text-base 2xl:text-xl  text-red-500'>{backText2}</p>}
          </div>
          <div>
            <button className='bg-red-700 group-hover:bg-red-800 group-hover:text-white duration-700 border-[1px] border-white p-3 rounded-lg text-xs md:text-base lg:text-xl 2xl:text-3xl bottom-4 '>
              Regresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
