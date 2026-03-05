import bannerImage from "../../../public/9cd49b03-7ae1-4572-8ed5-471929876295.avif"
import Image from 'next/image';
import  Explordata  from "../../components/Exploredata/page";
import Gitlive from "@/app/components/gitlive/page";
import GreatestOutdoors from "@/app/components/GreatestOutdoors/pag";
const Banner = () => {
  return (
    <div>
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px] ">
        <Image
        src={bannerImage}
        alt='banner-img'
        className='object-cover object-left'
        fill
      />
        <div className='absolute top-1/2 w-full text-center'>
          <p className='text-sm sm:text-lg text-white '>Not sure where to go? Perfect.</p>
          <button
            type='button'
            className='text-black-200 cursor-pointer bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'
          >
            I am flexible
          </button>
        </div>
      </div>
    <Explordata/>
    <Gitlive/>
    <GreatestOutdoors
          title='The Greatest Outdoors'
          desc='Wishlists curated by Airbnb'
          linkText='Get Inspired'
        />
    </div>
  );
};

export default Banner;
