import { FC } from 'react';
import { CategoryItem } from '../../store/categories/category.types';
import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer, PreviewContainer, Title } from './category-preview.styles';

type CategoryPreviewPropsType = {
    title: string;
    products: CategoryItem[];
}

const CategoryPreview:FC<CategoryPreviewPropsType> = ({ title, products }) => {
    return (
        <CategoryPreviewContainer key={title}>
            <h2 >
                <Title to={title}>
                    {title.toUpperCase()}
                </Title>
            </h2>
            <PreviewContainer>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) =>
                        <ProductCard key={product.id} product={product} />
                    )}
            </PreviewContainer>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview