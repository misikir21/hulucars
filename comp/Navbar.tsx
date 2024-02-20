import Image from "next/image";
import Link from "next/link";
import { Custombtn } from ".";
function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="car hulu logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <Custombtn
          title="sign in"
          btntype="button"
          containerStyles="text-primary-blue rounded-full bg-yellow min-w-[130px]"
        />
      </nav>
    </header>
  );
}

export default Navbar;
