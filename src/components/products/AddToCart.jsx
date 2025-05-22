import React from 'react'
import { rdx_add_item_to_cart } from '../../redux/cartReducer';
import { useDispatch, useSelector } from 'react-redux'

export default function AddToCart({ product }) {


    const { cartItems } = useSelector(store => store.cartReducer);

    const existsItem = cartItems.find(item => item.id === product.id);
    const quantity = existsItem ? existsItem.quantity : 0

    const dispatch = useDispatch();


    // Handle increment/decrement
    const handleIncrement = () => { dispatch(rdx_add_item_to_cart(product)) };
    const handleDecrement = () => { };


    return (
        <div className="mt-4 flex items-center justify-between">
            {
                quantity > 0 ?
                    <div className="flex items-center border rounded-full overflow-hidden">
                        <button
                            onClick={handleDecrement}
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                            -
                        </button>
                        <span className="px-3 py-1">{quantity}</span>
                        <button
                            onClick={handleIncrement}
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                            +
                        </button>
                    </div>
                    :
                    <div onClick={handleIncrement} className='cursor-pointer bg-sky-500 text-sky-100 px-3 py-1 rounded-xl text-center m-auto'>Add to Cart +</div>
            }
        </div>
    )
}
