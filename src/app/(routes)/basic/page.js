import Nav from "@/app/components/Nav";

// 1. I page.js (rejsen starter ved fx at sende prop: brugerNavn til Komponent A)
export default function Page() {
  return (
    <>
      <Nav />
      <div className="flex flex-col gap-4 font-sans dark:bg-gray-700 p-4 bg-gray-100 dark:text-gray-200 text-gray-800">
        <h1 className="text-4xl font-bold">Grundlæggende props</h1>
        <p>
          I PropsEksempel.jsx kan du se et eksempel på, hvordan props
          grundlæggende fungerer. <br /> En prop bliver defineret i en
          forælder-komponent og brugt til at smide forskellige info og styling
          på den samme komponent.
        </p>
        <Produkter />
        <br />
        <h1 className="text-4xl font-bold">Grundlæggende prop drilling</h1>
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
        <div className="bg-red-400 border-2 border-red-600 text-red-900 p-4 text-center">
          Page
          <KomponentA brugerNavn="Anders" />
        </div>
      </div>
    </>
  );
}

// 2. Komponent A (bruger ikke navnet, men sender det videre til B)
const KomponentA = ({brugerNavn}) => {
  return (
    <div className="bg-yellow-400 border-2 border-yellow-600 text-yellow-900 p-4">
      Komponent A
      <KomponentB brugerNavn={brugerNavn} />
    </div>
  );
};

// 3. Komponent B (bruger heller ikke selv navnet, men sender det videre til C)
const KomponentB = ({brugerNavn}) => {
  return (
    <div className="bg-green-400 border-2 border-green-600 text-green-900 p-4">
      Komponent B
      <KomponentC brugerNavn={brugerNavn} />
    </div>
  );
};

// 4. Komponent C (modtager endelig proppen og viser den)
const KomponentC = ({brugerNavn}) => {
  return (
    <div className="bg-blue-400 border-2 border-blue-600 text-blue-900 p-4">
      <p>Velkommen, {brugerNavn}!</p>
    </div>
  );
};

const Produkter = () => {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 border-2 border-gray-600 text-gray-900 p-4 text-center">
      <h2 className="text-2xl font-bold">Produkter</h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <ProduktKort navn="Taske" pris="149.00" beskrivelse="En taske...duh?" />
        <ProduktKort
          navn="Tavlekridt"
          pris="20.00"
          beskrivelse="En pakke tavlekridt i forskellige farver"
          lager
          reserveret="Reserveret til EK... hvorfor have tavler overalt men intet kridt?"
        />
        <ProduktKort
          navn="Mysterie Produkt"
          pris="43.60"
          beskrivelse="Du bestemmer"
          lager
        />
      </section>
    </div>
  );
};

// I barne-komponenten ProduktKort (modtager de props der blev defineret i forælderkomponenten)
const ProduktKort = ({navn, beskrivelse, pris, lager, reserveret}) => {
  return (
    <div className="flex flex-col gap-3 text-left bg-white border-2 border-gray-300 text-gray-900 p-4">
      <h1 className="text-2xl font-bold">{navn}</h1>
      <p className="text-3xl italic">{pris}</p>
      <p>{beskrivelse}</p>
      <span
        className={`px-2 py-1 rounded text-sm font-bold ${
          lager
            ? "bg-green-100 text-green-800" // Styling når på lager
            : "bg-red-100 text-red-800" // Styling når udsolgt
        }`}
      >
        {lager ? "På lager" : "Udsolgt"}
      </span>
      {reserveret ? (
        <p className="px-2 py-1 rounded text-sm bg-yellow-100 text-yellow-800">
          {reserveret}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};
