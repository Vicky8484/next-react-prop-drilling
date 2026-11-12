"use client";

import Nav from "@/app/components/Nav";

// 1. Siden definerer funktionen og sender den ned
export default function HjemSide() {
  const sigHej = () => {
    alert("Hej fra toppen af koden!");
  };
  const sikker = () => {
    confirm("Er du sikker på et eller andet?");
  };
  const navn = () => {
    prompt("Hvad hedder du?");
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col min-h-full gap-4 font-sans dark:bg-gray-700 p-4 bg-gray-100 dark:text-gray-200 text-gray-800">
        <h1 className="text-4xl font-bold">Prop drilling med funktioner</h1>
        <p>
          Man kan også sende funktioner ned gennem komponenter som props. I
          PropDrillingFunktionEksempel.jsx laver vi en aler() funktion som
          hedder sigHej. Derefter definerer vi onKlik-proppen som kommer på
          KortContainer komponenten med funktionen. I KortContainer bliver
          proppen sendt direkte videre til knap-komponenten, som kører
          funktionen, når man trykker på den.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <KortContainerA onKlik={sigHej} />
          <KortContainerB onSikker={sikker} />
          <KortContainerC onWhatsYourNameGurl={navn} />
        </div>
      </div>
    </>
  );
}

// 2. Bruger ikke funktionen, sender den bare videre
const KortContainerA = ({onKlik}) => {
  return (
    <div className="flex flex-col gap-4 border p-4 rounded-xl bg-gray-800 text-gray-100">
      <p>
        Jeg modtager onKlik-proppen, som indeholder alert() funktionen, og
        sender den videre til den her knap
      </p>
      <Knap1 onKlik={onKlik} />
    </div>
  );
};

// 3. Kalder funktionen når brugeren klikker
const Knap1 = ({onKlik}) => {
  return (
    <button
      onClick={onKlik}
      className="py-2 w-full text-center bg-red-400 mt-auto rounded-xl"
    >
      Klik på mig
    </button>
  );
};

// 2. Bruger ikke funktionen, sender den bare videre
const KortContainerB = ({onSikker}) => {
  return (
    <div className="flex flex-col gap-4 border p-4 rounded-xl bg-gray-800 text-gray-100">
      <p>
        Jeg modtager onSikker-proppen, som indeholder confirm() funktionen, og
        sender den videre til den her knap
      </p>
      <Knap2 onSikker={onSikker} />
    </div>
  );
};

// 3. Kalder funktionen når brugeren klikker
const Knap2 = ({onSikker}) => {
  return (
    <button
      onClick={onSikker}
      className="py-2 w-full text-center bg-red-400 mt-auto rounded-xl"
    >
      Klik på mig
    </button>
  );
};

const KortContainerC = ({onWhatsYourNameGurl}) => {
  return (
    <div className="flex flex-col gap-4 border p-4 rounded-xl bg-gray-800 text-gray-100">
      <p>
        Jeg modtager onWhatsYourNameGurl-proppen, som indeholder prompt()
        funktionen, og sender den videre til den her knap
      </p>
      <Knap3 onWhatsYourNameGurl={onWhatsYourNameGurl} />
    </div>
  );
};

// 3. Kalder funktionen når brugeren klikker
const Knap3 = ({onWhatsYourNameGurl}) => {
  return (
    <button
      onClick={onWhatsYourNameGurl}
      className="py-2 w-full text-center bg-red-400 mt-auto rounded-xl"
    >
      Klik på mig
    </button>
  );
};
