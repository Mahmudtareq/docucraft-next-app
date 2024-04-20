import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    //   <!-- Logo  -->
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image
          src="/logo.svg"
          alt="Protocol"
          width={100}
          height={24}
          class="h-6 w-auto"
        />
      </Link>
    </div>
    //   <!-- Logo Ends -->
  );
};

export default Logo;
