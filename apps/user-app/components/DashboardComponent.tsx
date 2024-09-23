import { World, GlobeConfig } from './ui/globe'; // Adjust the path as per your file structure

export const DashboardComponent = () => {
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
    <div className='grid grid-cols-1 mt-20 md:mt-1 md:grid-cols-2 flex flex-col justify-center items-center md:flex md:flex-row md:justify-between md:items-center md:mx-20'>
        <div>
            <h1 className='text-sky-700 text-5xl font-bold'>Your money is where you are</h1>
        </div>
        <div className='invisible md:visible w-[50vw] h-[60vh]'>
            <World globeConfig={globeConfig} data={globeData} />
        </div>
    </div>
  );
};

