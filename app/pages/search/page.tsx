"use client";

// export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import dynamic from "next/dynamic";

import Footer from "@/app/components/footer/page";
import Header from "@/app/components/Header/Header/page";
import ListingCard from "../../components/ListingCard";

// الصور
import img1 from "../../../public/img2.jpg";
import img2 from "../../../public/img4.jpg";
import img3 from "../../../public/img3.jpg";
import img4 from "../../../public/img1.jpg";

// Map بدون SSR
const Map = dynamic(() => import("../../Map"), { ssr: false });

type Listing = {
  img: string;
  title: string;
  location: string;
  description: string;
  price: string;
  total: string;
  star: string;
  lat: number;
  long: number;
};

function SearchResultContent() {
  const searchParams = useSearchParams();

  const location = searchParams.get("location") || "London";
  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";
  const guests = searchParams.get("guests") || "1";

  const formattedStartDate = startDate ? format(new Date(startDate), "PPP") : null;
  const formattedEndDate = endDate ? format(new Date(endDate), "PPP") : null;

  const dateRange =
    formattedStartDate && formattedEndDate
      ? `${formattedStartDate} - ${formattedEndDate}`
      : "Anytime";

  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];

  const searchResultData: Listing[] = [
    { img: img1.src, title: "Modern Flat in Central London", location: "London, UK", description: "2 guests · 1 bedroom · 1 bed · 1 bath · WiFi · Kitchen", price: "£120 / night", total: "£480 total", star: "4.8", lat: 51.509865, long: -0.118092 },
    { img: img2.src, title: "Cozy Studio near Hyde Park", location: "London, UK", description: "2 guests · Studio · 1 bed · 1 bath · Heating", price: "£95 / night", total: "£380 total", star: "4.6", lat: 51.507268, long: -0.16573 },
    { img: img3.src, title: "Luxury Apartment with City View", location: "London, UK", description: "4 guests · 2 bedrooms · 2 beds · 2 baths · Balcony", price: "£210 / night", total: "£840 total", star: "4.9", lat: 51.515419, long: -0.141099 },
    { img: img4.src, title: "Private Room in Shared House", location: "London, UK", description: "1 guest · 1 bedroom · Shared bath · WiFi", price: "£70 / night", total: "£280 total", star: "4.4", lat: 51.503399, long: -0.119519 },
  ];

  return (
    <div>
      <Header placeholder={`${location} | ${dateRange} | ${guests}`} />

      <main>
        <section>
          <div className="container flex flex-col lg:flex-row gap-6">
            <div className="pt-14 lg:w-3/5 flex flex-col gap-4">
              <p className="text-xs">300+ Stays - {dateRange} - for {guests} guests</p>

              <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

              <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                {filters.map((filter) => (
                  <button key={filter} className="px-4 py-2 border rounded-full text-sm hover:shadow-md transition">{filter}</button>
                ))}
              </div>

              {searchResultData.map((listing, index) => (
                <ListingCard key={index} {...listing} />
              ))}
            </div>

            <div className="pt-14 lg:w-2/5 lg:pl-6">
              <div className="h-[750px] w-full sticky top-0 right-0">
                <Map locations={searchResultData} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function SearchResult() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResultContent />
    </Suspense>
  );
}