import { Hero, CustomButton, CarCard, SearchBar, CustomFilter } from "@/comp";
import { fetchcars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allcars = await fetchcars();
  const isdataempty = !Array.isArray(allcars) || allcars.length < 1 || !allcars;
  console.log(allcars);
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
        {!isdataempty ? (
          <section>
            <div className="home__cars-wrapper">
              {allcars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oppos,no results</h2>
            <p>{allcars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
