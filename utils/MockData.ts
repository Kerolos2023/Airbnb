import { Room } from "@/types/app";

export const mockRooms: Room[] = [
  {
    room_id: "30229701",
    name: "One-Bedroom Pool Villa",
    description:
      "Featuring a private pool and tropical garden views, this spacious villa includes a separate living area, luxurious bathroom with deep soaking tub, and outdoor rain shower.",
    photos: [
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/123456789.jpg",
        caption: "Villa exterior with pool",
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/123456790.jpg",
        caption: "Bedroom with ocean view",
      },
    ],
    size_sqm: 170,
    size_sqft: 1830,
    max_occupancy: 3,
    bed_configuration: {
      primary_configuration: "1 king bed",
      alternative_configurations: [],
      extra_beds_available: true,
    },
    private_bathroom: true,
    facilities: [
      "Private pool",
      "Air conditioning",
      "Free WiFi",
      "Flat-screen TV",
      "Minibar",
      "Safe",
      "Coffee machine",
      "Bathrobe",
      "Slippers",
      "Hairdryer",
      "Toiletries",
      "Balcony",
      "Garden view",
      "Pool view",
      "Outdoor furniture",
      "Outdoor dining area",
    ],
    room_highlights: ["Private pool", "Garden view", "170 m²"],
  },
  {
    room_id: "30229702",
    name: "Two-Bedroom Pool Villa",
    description:
      "Perfect for families or groups, this expansive villa features two bedrooms, a private pool, full kitchen, and spacious outdoor living areas with stunning lagoon views.",
    photos: [
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/234567891.jpg",
        caption: "Two-bedroom villa pool area",
      },
    ],
    size_sqm: 320,
    size_sqft: 3444,
    max_occupancy: 6,
    bed_configuration: {
      primary_configuration: "2 king beds",
      alternative_configurations: ["1 king bed and 2 single beds"],
      extra_beds_available: true,
    },
    private_bathroom: true,
    facilities: [
      "Private pool",
      "Kitchen",
      "Living room",
      "Dining area",
      "2 bathrooms",
      "Air conditioning",
      "Free WiFi",
      "2 flat-screen TVs",
      "Wine cooler",
      "Dishwasher",
      "Washing machine",
      "Terrace",
      "BBQ facilities",
    ],
    room_highlights: ["Private pool", "Full kitchen", "320 m²", "2 bedrooms"],
  },
];
