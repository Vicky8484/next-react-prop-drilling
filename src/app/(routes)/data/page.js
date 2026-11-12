import OpskriftSektion from "@/app/dataFetch";
import Image from "next/image";
import Nav from "@/app/components/Nav";

export default function HjemSide() {
  return (
    <>
      <Nav />
      <div className="flex flex-col min-h-full gap-4 font-sans dark:bg-gray-700 p-4 bg-gray-100 dark:text-gray-200 text-gray-800">
        <h1 className="text-4xl font-bold">Prop drilling af data</h1>
        <p>
          I denne branch bruger jeg prop drilling til at sende et array af data
          videre til en komponent med et prop. <br /> I dataFetch.js (en server
          komponent) fetcher jeg data fra to API'er. Dataen bliver samlet i
          henholdsvist 'recipeData' og 'productsData', hvorefter de bliver smidt
          på som indhold til de tilsvarende props 'opskrifter' og 'produkter'
          som sidder på hver deres komponent. Disse komponenter modtager disse
          props og mapper henover objekterne i data-listerne (arrays) og laver
          en <b className="italic">article</b> for hvert opskrift/produkt.{" "}
          <br />
          Easy as 123.
        </p>
        <div>
          <OpskriftSektion />
        </div>
      </div>
    </>
  );
}
