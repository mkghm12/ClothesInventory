import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import { categoryDataSelector, selectCategoryDataIsLoading } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
    const categoryData = useSelector(categoryDataSelector);
    const isLoading = useSelector(selectCategoryDataIsLoading);
    // const { categoryData } = useContext(CategoryDataContext);
    return (
        <Fragment>
            {isLoading ? <Spinner /> :
                (Object.keys(categoryData)
                    .map((title) => {
                        const products = categoryData[title];
                        return (
                            <CategoryPreview key={title} title={title} products={products} />
                        )
                    }))
            }
        </Fragment>
    );
}

export default CategoriesPreview;