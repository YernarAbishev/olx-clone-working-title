import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";



function CategoryList() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await fetch(
                    "https://23578b50ab080ebe.mokky.dev/category"
                );
                const data = await res.json(); //res -> fetch()API -> data
                setCategories(data);
            } catch (e) {
                console.log(e);
            }
        }

        fetchCategories();
    }, []);


    return (
        <div className="category-card">
            {categories.map((category) => (
                <CategoryCard category={category} key={category.id} />
            ))}
        </div>
    );
}

export default CategoryList;