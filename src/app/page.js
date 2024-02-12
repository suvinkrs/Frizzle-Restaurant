import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Welcome to Frizzle Feast, where culinary delights meet endless fun!
          </p>
          <p>
          At Frizzle Feast, we humbly serve delicious Indian and Chinese dishes. Our open kitchen invites you to witness the freshness and authenticity in every bite. Enjoy our cozy seating area and indulge in our flavorful offerings. For added fun, our play zone offers pool tables and games to keep you entertained.</p>
          <p>Join us at Frizzle Feast for a delightful culinary experience and joyful moments!
</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +91-7518101042
          </a>
        </div>
      </section>
    </>
  )
}
