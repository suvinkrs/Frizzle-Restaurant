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
              <button>
                <Link href={`/menu#${c.name}`}>{c.name}</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}