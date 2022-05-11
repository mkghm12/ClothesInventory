import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryDataContext } from "../../contexts/categorydata.context";
import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoryData } = useContext(CategoryDataContext);
    const [products, setProducts] = useState(categoryData[category]);
    useEffect(() => {
        setProducts(categoryData[category]);
    }, [category, categoryData]);

    return (
        <div className="category-container">
            {
                products && products.map(product =>
                    <ProductCard key={product.id} product={product} />
                )
            }
        </div>
    )
}

export default Category;