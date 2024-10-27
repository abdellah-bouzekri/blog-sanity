import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Nav = () => {
  return (
    <>
      <nav className="w-full relative flex justify-between items-center max-w-2xl mx-auto px-4 py-5">
        <Link className="font-bold text-3xl " href="/">
          Blog
        </Link>
        <ModeToggle />
      </nav>
    </>
  );
};

export default Nav;
