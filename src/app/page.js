import Card from "@/components/Card";
export const metadata = {
  title: "Home Page",
  description: "This is the home page",
};

// get data from API
export async function getData() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?limit=100&offset=0"
    // "https://dummyjson.com/products"
  );
  const data = await res.json();
  return data;
}

export default async function Home() {
  const products = await getData();

  return (
    <main className="flex min-h-screen flex-wrap items-center justify-between p-24">
      {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.images[0]}
          />
        ))}
    </main>
  );
}
