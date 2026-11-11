"use client";

export default function Side() {
  // En helt simpel funktion uden hooks
  const sikker = () => {
    confirm("Er du sikker på et eller andet?");
  };

  return <BrugerKort onSikker={sikker} />;
}

// 2. Bruger ikke funktionen, sender den bare videre
const BrugerKort = ({onSikker}) => {
  return (
    <div className="flex flex-col gap-4 border p-4 rounded-xl bg-gray-800 text-gray-100">
      <p>
        Jeg modtager onSikker-proppen, som indeholder confirm() funktionen, og
        sender den videre til den her knap
      </p>
      <Knap onSikker={onSikker} />
    </div>
  );
};

// 3. Kalder funktionen når brugeren klikker
const Knap = ({onSikker}) => {
  return (
    <button
      onClick={onSikker}
      className="py-2 w-full text-center bg-red-400 mt-auto rounded-xl"
    >
      Klik på mig
    </button>
  );
};
