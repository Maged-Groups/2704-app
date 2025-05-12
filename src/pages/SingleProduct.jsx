import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import CategoriesList from '../components/products/CategoriesList';
import SimilarProducts from '../components/products/SimilarProducts';

console.log('SingleProduct.jsx file');

export default function SingleProduct() {
    console.log('SingleProduct Component rendered')

    const { id } = useParams();

    const [product, setProduct] = useState({});
    console.log('product', product)

    const get_product = async () => {
        console.log('Inside get_product')

        // const api = `http://localhost:8000/api/posts/${id}`;  // FOR ALIAA & ADAM  (((( ONLY ))))
        const api = `https://dummyjson.com/products/${id}`;

        const res = await fetch(api);

        setProduct(await res.json());
    }

    // useEffect(() => { }, []);
    console.log('Before useEffect')
    useEffect(() => {
        console.log('Inside useEffect')
        get_product();
    }, [id]);
    console.log('After useEffect')



    return (
        <div className='p-5 flex flex-col lg:flex-row justify-between'>

            {/* Product Data */}

            <div className='border lg:w-10/12'>
                <h2 className='text-center text-sky-600 text-2xl'>{product.title}</h2>


                <div>
                    <img src={product.thumbnail} className='max-w-full' alt="" />
                </div>


                <div>
                    {product.category}
                </div>

                {/* Similar Products */}
                <div>
                    <SimilarProducts slug={product.category} />
                </div>
            </div>

            {/* Categories */}
            <div className='lg:w-2/12'>
                <h3>Shop by Category</h3>

                <CategoriesList />
            </div>


        </div>
    )
}
