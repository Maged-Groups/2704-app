import { Link } from "react-router";
import apis from "../../lib/apis"

const res = await fetch(apis.categories);

const categories = await res.json();

console.log('categories categories', categories);

export default function CategoriesList() {
    return (
        <div className="p-3 flex flex-col gap-2 text-xs">
            {
                categories.map(cat => (
                    <div key={cat.slug}>
                        <Link to={`/categories/${cat.slug}`}>{cat.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}
