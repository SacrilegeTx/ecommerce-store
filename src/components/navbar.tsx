import Link from "next/link";

import getCategories from "@/actions/category/get-categories";

import Container from "./ui/container";
import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

async function Navbar() {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link className="ml-4 flex gap-x-2 lg:ml-0" href="/">
            <p className="text-xl font-bold">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
