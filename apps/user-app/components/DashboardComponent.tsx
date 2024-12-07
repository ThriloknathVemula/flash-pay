import { World, GlobeConfig } from './ui/globe';
import picnicImg from '../assets/picnic.jpg';
import Image from 'next/image';
import FlashPayBtn from './FlashPayBtn';

export const DashboardComponent = (props:{name:string}) => {
  const globeData = [
    {
      order: 1,
      startLat: 37.7749,
      startLng: -122.4194,
      endLat: 48.8566,
      endLng: 2.3522,
      arcAlt: 0.3,
      color: '#ff5733',
    },
    {
       order: 2,
       startLat: 145.7749,
       startLng: 22.4194,
       endLat: 148.8566,
       endLng: 25.3522,
       arcAlt: 0.3,
       color: '#ff5733',
    },
    {
        order: 3,
        startLat: 15.7749,
        startLng: 22.4194,
        endLat: 14.8566,
        endLng: 52.3522,
        arcAlt: 0.3,
        color: '#ff5733',
     },
     {
        order: 4,
        startLat: 54.7749,
        startLng: 24.4194,
        endLat: 154.8566,
        endLng: 125.3522,
        arcAlt: 0.3,
        color: '#ff5733',
     },
    // Add more arcs or points here
  ];

  let duration;
  const timeNow = new Date((new Date()).toLocaleTimeString()).getHours();
  const name = props.name.charAt(0).toUpperCase() + props.name.slice(1);

  if((timeNow >= 5 && timeNow < 12)){
    duration = "Morning"
  }else if((timeNow >= 12 && timeNow < 17)){
    duration = "Afternoon"
  }else {
    duration = "Evening"
  }


  const globeConfig: GlobeConfig = {
    globeColor: '#b7b7c7',
    showAtmosphere: true,
    atmosphereColor: '#3465a4',
    atmosphereAltitude: 0.2,
    polygonColor: '#8888a8',
    ambientLight: '#0080ff',
    directionalLeftLight: '#0080ff',
    directionalTopLight: '#0080ff',
    pointLight: '#0080ff',
    arcTime: 3000,
    arcLength: 0.8,
    rings: 2,
    maxRings: 5,
    autoRotate: true,
    autoRotateSpeed: 2,
  };

  return (
    <div className='bg-[#F5F7F8] mx-auto flex flex-col items-center xl:items-start mb-5'>
      <div className='grid grid-cols-1 mt-20 lg:mt-1 lg:grid-cols-2 flex flex-col justify-center items-center md:flex md:flex-row md:justify-between md:items-center md:mx-20'>
        <div className='flex flex-col items-center text-center px-2'>
            <h1 className='text-sky-700 text-3xl md:text-4xl font-bold font-sans mb-2'>Good {duration} {name}.</h1>
            <h1 className='text-sky-700/75 text-3xl md:text-4xl font-bold font-sans'>Your money is where you are</h1>
        </div>
        <div className='hidden lg:block w-[50vw] h-[60vh]'>
            <World globeConfig={globeConfig} data={globeData} />
        </div>
      </div>
      <div className='bg-cyan-200 w-[50vw] max-h-[50vh] rounded-lg mt-10 ml-2 xl:ml-16 p-5 py-20 flex flex-col items-center gap-2'>
          <p className='text-3xl text-slate-950 font-semibold font-mono'>Fast, Safe and Social Payments</p>
          <p className='text-gray-500'>Pay, get paid, grow a business, and more. Join the tens of millions of people on FlashPay.</p>
          <FlashPayBtn text={"FlashPay"} routePage='transfer'/>
          <Image src={picnicImg} alt="picnic-img" className='hidden xl:block h-[25rem] w-96 rounded-md lg:relative xl:left-[520px] xl:bottom-[160px]'/>
      </div>
    </div>
  );
};

