import { useParams } from 'react-router'


console.log('EditProduct.jsx file');


export default function EditProduct() {

    console.log('EditProduct Component rendered');


    const { id } = useParams();

    console.log('id', id);

    return (
        <div>Edit Product {id}</div>
    )
}
