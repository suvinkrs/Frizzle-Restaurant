import Right from "@/components/icons/Right";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="hero md:mt-4 bg-[#5AC0DF] rounded-lg p-3 mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black via-red-800 to-red-500">
          Everything<br />
          is better<br />
          with a Crunch
        </h1>
        {/* <p className="my-6 text-gray-500 text-sm">
          Indulge in irresistible fast food flavors, satisfying every craving with every bite, a taste sensation awaits you!
        </p> */}
        <div className="flex pt-9 gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2 rounded-full border-gray-800 border-spacing-0  hover:bg-black hover:border-black hover:text-white transition-colors duration-500">
            <Link href={'/menu'}>Order now</Link>
            <Right />
          </button>
          <button className="flex items-center  text-gray-800 font-semibold border-gray-800 rounded-full border-spacing-0  hover:bg-black hover:text-white transition-colors duration-500">
            <Link href={'/#about'}>Learn more</Link>
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/fast food-pana.png'} layout={'fill'} objectFit={'contain'} alt={'chicken'} />
      </div>
    </section>
  );
}