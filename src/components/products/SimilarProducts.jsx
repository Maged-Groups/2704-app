import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import apis from '../../lib/apis';

const SimilarProducts = ({ slug }) => {
    const [products, setProducts] = useState([]);

    console.log('slug ', slug)
    console.log('products->SimilarProducts ', products)

    useEffect(() => {
        console.log('useEffect inside SimilarProducts fired')
        fetch(apis.byCategory + slug)
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, [slug]);

    return (
        <div className="mt-12">
            <h3 className="text-xl font-bold mb-4 px-4">Similar Products</h3>
            <div className="flex overflow-x-auto pb-4 gap-4 px-4 scrollbar-hide">
                {products.map((product) => (
                    <Link
                        to={`/marketplace/${product.id}`}
                        key={product.id}
                        className="flex-shrink-0 w-40 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="h-32 overflow-hidden rounded-t-lg">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-2">
                            <h4 className="text-sm font-medium truncate">{product.title}</h4>
                            <div className="flex justify-between items-center mt-1">
                                <span className="text-sm font-bold text-blue-600">
                                    ${product.price.toFixed(2)}
                                </span>
                                <div className="flex items-center text-xs">
                                    ⭐ {product.rating.toFixed(1)}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SimilarProducts;