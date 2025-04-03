import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className="rounded-2xl text-white-100 sticky top-0 z-50 bg-gradient-to-r from-blue-950 via-violet-700 to-blue-900 body-font">
      <div className="rounded-2xl container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-extrabold items-center uppercase text-gray-100"
        >
          {/* <Image alt="Navbar Logo" src="/Pizza.svg" width={60} height={60} /> */}
          <p className="leading-5 text-xl mx-2">NextJob.Ai</p>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/cart"
            className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
          >
            Cart
          </Link>
          <Link
            href="/admin"
            className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
          >
            Admin
          </Link>
          <Link
            href="/orders"
            className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
          >
            My Orders
          </Link>
          <Link
            href="/login"
            className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
          >
            Signup
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
