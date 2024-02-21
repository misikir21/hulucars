import { Hero, Custombtn, SearchBar, CustomFilter } from "@/comp";
import { fetchcars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allcars = await fetchcars();
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore cars you may like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-cotainer">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
      </div>
    </main>
  );
}
