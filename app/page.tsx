import { Hero, Custombtn } from "@/comp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Custombtn />
    </main>
  );
}
