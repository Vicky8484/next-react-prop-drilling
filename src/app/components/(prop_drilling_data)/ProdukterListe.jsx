import Image from "next/image";

export default function ProdukterListe({produkter}) {
  return (
    <section className="scroll flex overflow-x-auto snap-x snap-mandatory w-full gap-4 items-center justify-start">
      {produkter.map((produkt) => (
        <article
          key={produkt.id}
          className="w-50 shrink-0 snap-center bg-green-100 text-green-800 rounded-xl shadow-2xl"
        >
          <Image
            src={produkt.thumbnail}
            width={200}
            height={200}
            alt={produkt.title}
            className="w-full rounded-t-xl border-b border-green-300"
          />
          <div className="p-4">
            <p>
              <b>({produkt.title})</b>
            </p>
            <p>({produkt.brand})</p>
          </div>
        </article>
      ))}
    </section>
  );
}
