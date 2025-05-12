import ProductCard from "../components/products/ProductCard";
import apis from "../lib/apis";

console.log('Products File loaded');


const res = await fetch(apis.products);

const data = await res.json();

const { products } = data;

console.log('products', products);

export default function Products() {

  console.log('Products Component rendered');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shop Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
