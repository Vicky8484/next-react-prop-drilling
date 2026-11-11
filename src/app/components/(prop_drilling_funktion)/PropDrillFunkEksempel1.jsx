"use client";

// 1. Siden definerer funktionen og sender den ned
export default function HjemSide() {
  const sigHej = () => {
    alert("Hej fra toppen af koden!");
  };

  return <KortContainer onKlik={sigHej} />;
}

// 2. Bruger ikke funktionen, sender den bare videre
const KortContainer = ({onKlik}) => {
  return (
    <div className="flex flex-col gap-4 border p-4 rounded-xl bg-gray-800 text-gray-100">
      <p>
        Jeg modtager onKlik-proppen, som indeholder alert() funktionen, og
        sender den videre til den her knap
      </p>
      <Knap onKlik={onKlik} />
    </div>
  );
};

// 3. Kalder funktionen når brugeren klikker
const Knap = ({onKlik}) => {
  return (
    <button
      onClick={onKlik}
      className="py-2 w-full text-center bg-red-400 mt-auto rounded-xl"
    >
      Klik på mig
    </button>
  );
};
