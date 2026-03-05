import React from 'react'
import Explorcard from '../Explorcard/page';
import { Explordata } from '@/utils/api';
async function explorpage() {
    const data = await Explordata();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"> 
    <h1 className="text-2xl md:text-3xl font-bold mb-6"> Features </h1> 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((item: any) => ( 
            <Explorcard key={item.id} 
            img={item.thumbnail} 
            price={item.price} 
            rating={item.rating} 
            /> ))}
    </div>
</div>
  )
}

export default explorpage