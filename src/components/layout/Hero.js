import Right from "@/components/icons/Right";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything<br />
          is better<br />
          with a&nbsp;
          <span className="text-primary">
            Crunch
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Indulge in irresistible fast food flavors, satisfying every craving with every bite, a taste sensation awaits you!
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            <Link href={'/menu'}>Order now</Link>
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            <Link href={'/#about'}>Learn more</Link>
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/chicken.png'} layout={'fill'} objectFit={'contain'} alt={'chicken'} />
      </div>
    </section>
  );
}