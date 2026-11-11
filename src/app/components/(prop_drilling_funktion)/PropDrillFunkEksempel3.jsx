"use client";

// 1. Siden definerer funktionen og sender den ned
export default function HjemSide() {
  const navn = () => {
    prompt("Hvad hedder du?");
  };

  return <KortContainer onWhatsYourNameGurl={navn} />;
}

// 2. Bruger ikke funktionen, sender den bare videre
const KortContainer = ({onWhatsYourNameGurl}) => {
  return (
    <div className="flex flex-col gap-4 border p-4 rounded-xl bg-gray-800 text-gray-100">
      <p>
        Jeg modtager onWhatsYourNameGurl-proppen, som indeholder prompt()
        funktionen, og sender den videre til den her knap
      </p>
      <Knap onWhatsYourNameGurl={onWhatsYourNameGurl} />
    </div>
  );
};

// 3. Kalder funktionen når brugeren klikker
const Knap = ({onWhatsYourNameGurl}) => {
  return (
    <button
      onClick={onWhatsYourNameGurl}
      className="py-2 w-full text-center bg-red-400 mt-auto rounded-xl"
    >
      Klik på mig
    </button>
  );
};
