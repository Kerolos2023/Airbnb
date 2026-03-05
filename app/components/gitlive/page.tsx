import React from "react";
import Image from "next/image";
import { GetLive } from "@/utils/api";
import { gitlivedata } from "@/types/app";

async function Gitlive() {
  const liveData: gitlivedata = await GetLive();

  return (
    <div className="container max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Live Anywhere</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {liveData?.map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer"
          >
            <div className="relative w-full h-56">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-3 text-lg font-semibold">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gitlive;