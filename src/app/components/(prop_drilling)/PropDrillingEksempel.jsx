// 1. I page.js (rejsen starter ved fx at sende prop: brugerNavn til Komponent A)
export default function Page() {
  return (
    <div className="bg-red-400 border-2 border-red-600 text-red-900 p-4 text-center">
      Page
      <KomponentA brugerNavn="Anders" />
    </div>
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
