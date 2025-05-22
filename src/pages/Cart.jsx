import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { rdx_clear_cart, rdx_remove_item_from_cart } from '../redux/cartReducer';

const Cart = () => {
    // Sample cart data

    const dispatch = useDispatch();
    const { cartItems } = useSelector(store => store.cartReducer);

    // Calculate totals
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update quantity
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;

        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };


    const clearCart = () => {
        dispatch(rdx_clear_cart());
    };

    // Remove item
    const removeItem = (id) => {
        dispatch(rdx_remove_item_from_cart(id))
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items */}
                <div className="lg:w-2/3">
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        {/* Table Header */}
                        <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 border-b">
                            <div className="col-span-5 font-medium text-gray-700">Product</div>
                            <div className="col-span-2 font-medium text-gray-700 text-center">Price</div>
                            <div className="col-span-3 font-medium text-gray-700 text-center">Quantity</div>
                            <div className="col-span-2 font-medium text-gray-700 text-right">Total</div>
                        </div>

                        {/* Cart Items */}
                        {cartItems.length === 0 ? (
                            <div className="p-8 text-center text-gray-500">
                                Your cart is empty
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 p-4 border-b last:border-b-0">
                                    {/* Product Info */}
                                    <div className="col-span-5 flex items-center mb-4 md:mb-0">
                                        <div className="flex-shrink-0 h-20 w-20 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="mt-1 text-sm text-red-500 hover:text-red-700"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="col-span-2 flex items-center justify-center mb-4 md:mb-0">
                                        <p className="text-gray-900">${item.price.toFixed(2)}</p>
                                    </div>

                                    {/* Quantity */}
                                    <div className="col-span-3 flex items-center justify-center mb-4 md:mb-0">
                                        <div className="flex items-center border border-gray-300 rounded-md">
                                            <button
                                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                            >
                                                -
                                            </button>
                                            <span className="px-3 py-1 text-gray-900">{item.quantity}</span>
                                            <button
                                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Total */}
                                    <div className="col-span-2 flex items-center justify-end">
                                        <p className="text-gray-900 font-medium">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:w-1/3">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>

                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Total Items</span>
                                <span className="text-gray-900">{totalItems}</span>
                            </div>

                            <div className="flex justify-between border-t border-gray-200 pt-4">
                                <span className="text-lg font-medium text-gray-900">Total Price</span>
                                <span className="text-lg font-medium text-gray-900">${totalPrice.toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
                        >
                            Proceed to Checkout
                        </button>

                        <div className="mt-4 text-center text-sm text-gray-500">
                            or{' '}
                            <Link to="/marketplace" className="text-blue-600 hover:text-blue-500">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>

                    <button
                        onClick={clearCart}
                        className="w-full mt-6  text-red-800 py-3 px-4 rounded-md font-medium transition-colors"
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;