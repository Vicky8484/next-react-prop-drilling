import OpskriftSektion from "@/app/components/(prop_drilling_data)/dataFetch";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 font-sans dark:bg-gray-700 p-4 bg-gray-100 dark:text-gray-200 text-gray-800">
        <h1 className="text-4xl font-bold">
          Prop Drilling Tutorial{" "}
          <span className="dark:text-gray-400 text-gray-600 text-2xl">
            af Victory Okosun
          </span>
        </h1>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">Props?</h2>
          <p>
            Props er en forkortelse for properties, og de sender data fra en
            komponent til en anden. <br />
            Props kan indeholde alt fra tekst til classnavne, ternaries,
            funktioner, komponenter og lister af data.
          </p>
          <h2 className="font-bold">Hvor, hvornår, hvorfor?</h2>
          <p>
            Man kan bruge props i alle komponentbaseret frontend-frameworks. Man
            bruger det for eksempel, når den samme komponent skal kunne
            forskellige ting eller se anderledes ud afhængigt af, hvor man
            kalder den, så man undgår at lave flere forskellige komponenter med
            samme hovedformål.
          </p>
          <h2 className="font-bold">Prop drilling?</h2>
          <p>
            Man definerer, hvilke props komponenten skal tage imod inde i
            komponenten. Man definerer indholdet af de her props, der hvor
            komponenten kaldes, fx. i page.js eller i en anden komponent. På den
            måde kan props fungere lidt ligesom HTML-attributter som man sætter
            på komponenten, der hvor den er kaldt.
          </p>
          <p>
            Dataen går kun én vej: nedad fra forælder til barn. Den komponent
            der modtager props kan ikke ændre værdien af dem. I et hieraki af
            komponenter kan props sendes hele vejen ned gennem alle leddene, fra
            der hvor de defineres til der hvor de modtages.
          </p>
          <h2 className="font-bold">Hvor, hvornår, hvorfor?</h2>
          <p>
            Man kan bruge prop drilling i alle komponentbaserede
            frontend-frameworks. Man bruger det, når man skal sende data fra en
            overordnet komponent helt ned til en underkomponent, ved at sende
            dataene videre gennem alle de mellemliggende komponenter.
          </p>
        </div>
        <h1 className="text-3xl font-bold">Eksempler</h1>
        <p>
          Dette repository indeholder eksempler på brug af props og prop
          drilling i tre forskellige branches:
        </p>
        <ul className="list-disc p-4">
          <li>Props og prop drilling - Grundlæggende</li>
          <li>Prop drilling - Funktion</li>
          <li>
            <b>Prop drilling - Data</b>
          </li>
        </ul>
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
