import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryDataContext } from "../../contexts/categorydata.context";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";

const Category = () => {
    const { category } = useParams();
    const { categoryData } = useContext(CategoryDataContext);
    const [products, setProducts] = useState(categoryData[category]);
    useEffect(() => {
        setProducts(categoryData[category]);
    }, [category, categoryData]);

    return (
        <Fragment>
            <CategoryTitle>
                {category.toUpperCase()}
            </CategoryTitle>
            <CategoryContainer>
                {
                    products && products.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )
                }
            </CategoryContainer>
        </Fragment>

    )
}

export default Category;