//I forælderkomponenten Produkter (ProduktKort komponenten kaldes 3 gange. De samme props bliver defineret, men med forskelligt indhold)

export default function Produkter() {
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
}

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
