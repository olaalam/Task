// components/Navbar.tsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
      {/* Logo */}
      <Link href="/" className="text-2xl font-semibold">
        <span>*</span>scout
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-sm font-medium  text-gray-300">
        <Link href="/features" className="hover:text-white">
          Features
        </Link>
        <Link href="/pricing" className="hover:text-white">
          Pricing
        </Link>
        <Link href="/docs" className="hover:text-white">
          Docs
        </Link>
        <Link href="/blog" className="hover:text-white">
          Blog
        </Link>
      </div>

      {/* Auth buttons (desktop) */}
      <div className="hidden md:flex items-center space-x-3">
        <Button variant="ghost" className="rounded-full px-5 bg-transparent border border-gray-500 text-gray-500">Login</Button>
        <Button className="rounded-full px-5 bg-white text-black hover:text-white ">Sign Up</Button>
      </div>

      {/* Mobile Menu (shadcn Sheet) */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white w-64 border-none">
            <div className="flex flex-col justify-center items-center  space-y-6 mt-8 text-lg">
              <Link href="#features" className="hover:text-gray-300">
                Features
              </Link>
              <Link href="#pricing" className="hover:text-gray-300">
                Pricing
              </Link>
              <Link href="#docs" className="hover:text-gray-300">
                Docs
              </Link>
              <Link href="#blog" className="hover:text-gray-300">
                Blog
              </Link>

              <div className="border-t border-gray-700 pt-6 flex flex-col space-y-3">
                <Button variant="ghost" className="w-full">
                  Login
                </Button>
                <Button className="w-full rounded-full">Sign Up</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
