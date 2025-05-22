import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import AddToCart from './AddToCart'

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    console.log('ProductCard rendered')
    // Handle add to cart
    const handleAddToCart = () => {
        // You can integrate with Redux, Context, or any state management here
    };


    return (
        <div
            className={`group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl ${isHovered ? 'ring-2 ring-blue-500' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Badge (if discounted) */}
            {product.discountPercentage > 0 && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 animate-pulse">
                    {Math.round(product.discountPercentage)}% OFF
                </div>
            )}

            {/* Product Image */}
            <div className="h-48 overflow-hidden">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>

            {/* Product Details */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {product.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {product.description}
                </p>

                {/* Price & Rating */}
                <div className="flex justify-between items-center mt-3">
                    <div>
                        <span className="text-lg font-bold text-blue-600">
                            ${product.price.toFixed(2)}
                        </span>
                        {product.discountPercentage > 0 && (
                            <span className="ml-2 text-sm text-gray-500 line-through">
                                ${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center">
                        ⭐
                        <span className="text-sm ml-1">{product.rating}</span>
                    </div>
                </div>

                {/* Add to Cart Component */}
                <AddToCart product={product} />

                <Link
                    to={`/marketplace/${product.id}`}
                    className="flex items-center justify-center bg-black/50 my-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    Quick View
                </Link>

            </div>


        </div>
    );
};

export default ProductCard;