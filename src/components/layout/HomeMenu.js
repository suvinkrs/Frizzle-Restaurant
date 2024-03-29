'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        const besSeller = [menuItems[3], menuItems[14], menuItems[27]];
        setBestSellers(besSeller);
      });
    });
  }, []);
  useEffect(() => {
    fetch('/api/categories').then(res => {
      res.json().then(categories => setCategories(categories))
    });
  }, []);
  return (
    <section className="py-8 ">
      <div className="text-center mb-6 pb-5">
        <SectionHeaders
          subHeader={'Browse'}
          mainHeader={'Our Categories'} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {categories?.length > 0 && categories.map(c => (
          <div key={c._id}>
            <div className="text-center">
              <button className="border-none inline">
                <Link href={`/menu#${c.name}`} className="relative">
                  <span class="absolute top-2 left-0 mt-2  h-full w-full rounded bg-primary"></span>
                  <span class="fold-bold relative inline-block h-full w-full rounded border-2  bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">{c.name}</span>
                  </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}