import PropDrillingEksempel from "@/app/components/(prop_drilling)/PropDrillingEksempel";
import PropsEksempel from "@/app/components/(props)/PropsEksempel";

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
          <h2 className="font-bold">Opsætning?</h2>
          <p>
            For at bruge props og prop drilling skal man arbejde i et
            komponentbaseret frontend-framework som fx Astro, React eller
            Next.js
          </p>
          <a
            href="https://docs.astro.build/en/install-and-setup/"
            className="underline hover:text-orange-500"
          >
            Se hvordan du starter et nyt Astro projekt her
          </a>
          <a
            href="https://nextjs.org/"
            className="underline hover:text-orange-500 mb-4"
          >
            Se hvordan du starter et nyt Next.js projekt her
          </a>
        </div>
        <h1 className="text-3xl font-bold">Eksempler</h1>
        <p>
          Dette repository indeholder eksempler på brug af props og prop
          drilling i tre forskellige branches:
        </p>
        <ul className="list-disc p-4">
          <li>
            <b>Props og prop drilling - Grundlæggende</b>
          </li>
          <li>Prop drilling - Funktion</li>
          <li>Prop drilling - Data</li>
        </ul>
        <p>
          I PropsEksempel.jsx kan du se et eksempel på, hvordan props
          grundlæggende fungerer. <br /> En prop bliver defineret i en
          forælder-komponent og brugt til at smide forskellige info og styling
          på den samme komponent.
        </p>
        <div>
          <PropsEksempel />
        </div>
        <p>
          I PropDrillingEksempel.jsx kan du se et eksempel på, hvordan prop
          drilling fungerer. <br /> En prop bliver defineret helt oppe i Page
          (øverst i hierakiet) og sendt ned gennem flere komponenter indtil den
          endelig bliver brugt i en komponent som var tre lag inde.
        </p>
        <p>
          Dette er fx. nyttigt, hvis en bruger indtaster sit navn ét sted, og
          deres navn så skal vises i en komponent som ligger i en komponent i en
          anden komponent blablabla.
        </p>
        <div>
          <PropDrillingEksempel />
        </div>
      </div>
    </>
  );
}
