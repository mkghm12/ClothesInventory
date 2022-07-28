import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoryDataIsLoading, categoryDataSelector } from "../../store/categories/category.selector";
import { CategoryContainer, CategoryPreviewContainer, CategoryTitle } from "./category.styles";

type CategoryRouteParams = {
    category: string;
}

const Category = () => {
    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    const categoryData = useSelector(categoryDataSelector);
    const isLoading = useSelector(selectCategoryDataIsLoading);
    const [products, setProducts] = useState(categoryData[category]);
    useEffect(() => {
        setProducts(categoryData[category]);
    }, [category, categoryData]);

    return (
        <CategoryPreviewContainer>
            <CategoryTitle>
                {category.toUpperCase()}
            </CategoryTitle>
            {
                isLoading ? <Spinner /> :
                    (<CategoryContainer>
                        {
                            products && products.map(product =>
                                <ProductCard key={product.id} product={product} />
                            )
                        }
                    </CategoryContainer>)
            }
        </CategoryPreviewContainer>

    )
}

export default Category;