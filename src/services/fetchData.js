"use server";
export const getData = async (url, take) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}${url}${take ? `?take=${take}` : ""}`
      // {
      //   next: { revalidate: 60 },
      // }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data.");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching courses data:", error);
    return null;
  }
};
