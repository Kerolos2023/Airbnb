export type CardItem = {
    id: number;
    thumbnail: string;
    price: number;
    rating: number;
    title: string;
};

export const Explordata = async (): Promise<CardItem[]> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/category/furniture?limit=8`, {next: { revalidate: 60 } });
        const data = await res.json();
        console.log("Fetched explore data:", data);
        return data.products;
    } catch (error) {
        console.error("Error fetching explore data:", error);
        return [];
    }
};

export async function GetLive() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_GITLIVE}/b/VHHT`, {
      next: { revalidate: 60 }
    });

    console.log("Status:", res.status);

    if (!res.ok) {
      const text = await res.text();
      console.log("Response text:", text);
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    return [];
    }
}

