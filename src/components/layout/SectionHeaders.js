export default function SectionHeaders({subHeader,mainHeader}) {
  return (
    <>
      <h3 className="uppercase text-gray-500 font-semibold leading-4">
        {subHeader}
      </h3>
      <h2 className="text-primary font-bold text-4xl underline decoration-dashed">
        {mainHeader}
      </h2>
    </>
  );
}