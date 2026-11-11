import Image from "next/image";

export default function OpskriftListe({opskrifter}) {
  return (
    <section className="scroll flex overflow-x-auto snap-x snap-mandatory w-full gap-4 items-center justify-start">
      {opskrifter.map((opskrift) => (
        <article
          key={opskrift.id}
          className="w-50 shrink-0 snap-center bg-yellow-100 text-yellow-800 rounded-xl shadow-2xl"
        >
          <Image
            src={opskrift.image}
            width={200}
            height={200}
            alt={opskrift.name}
            className="w-full rounded-t-xl"
          />
          <div className="p-4">
            <p>
              <b>({opskrift.name})</b>
            </p>
            <p>({opskrift.cuisine})</p>
          </div>
        </article>
      ))}
    </section>
  );
}
