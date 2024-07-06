import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./mobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 w-full bg-primary-200 h-[100px]">
      <div className="container max-auto h-full flex items-center justify-between">
        <Link href="">
          <Image
            src={"/assets/assets/img/logo.png"}
            width={177}
            height={55}
            alt="logo"
          />
        </Link>
        {/* Mobile Nav  */}
        <MobileNav containerStyles="xl:hidden text-white" />

        {/* Desktop Nav  */}
        <Nav containerStyles="text-white py-12 flex gap-4 hidden xl:flex" />
      </div>
    </header>
  );
};

export default Header;
