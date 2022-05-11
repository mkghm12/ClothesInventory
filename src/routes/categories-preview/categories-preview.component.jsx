import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoryDataContext } from "../../contexts/categorydata.context";

const CategoriesPreview = () => {
    const { categoryData } = useContext(CategoryDataContext);
    return (
        <Fragment>
            {
                Object.keys(categoryData)
                    .map((title) => {
                        const products = categoryData[title];
                        return (
                            <CategoryPreview key={title} title={title} products={products} />
                        )
                    })
            }
        </Fragment>
    );
}

export default CategoriesPreview;