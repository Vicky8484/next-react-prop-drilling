import OpskriftListe from "@/app/components/(prop_drilling_data)/OpskriftListe";
import ProduktListe from "@/app/components/(prop_drilling_data)/ProdukterListe";

export default async function OpskriftSektion() {
  // 1. Henter data direkte på serveren
  const response = await fetch("https://dummyjson.com/recipes?limit=10");
  const recipeData = await response.json();

  const moreResponse = await fetch("https://dummyjson.com/products?limit=10");
  const productsData = await moreResponse.json();

  // 2. Sender arrayet (data.recipes) videre med "opskrifter" prop
  return (
    <div className="flex flex-col gap-4 bg-yellow-50 border-2 border-yellow-700 p-4 rounded-xl">
      <h1 className="text-3xl font-bold">Opskrifter</h1>
      <OpskriftListe opskrifter={recipeData.recipes} />

      <h1 className="text-3xl font-bold">Produkter</h1>
      <ProduktListe produkter={productsData.products} />
    </div>
  );
}
