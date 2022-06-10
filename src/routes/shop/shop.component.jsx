import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setCategories } from '../../store/categories/category.action';
import { getDocumentsAndDataFromCollection } from '../../utils/firebase/firebase.util';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.styles.scss';
const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoryData = async () => {
            const categoriesArray = await getDocumentsAndDataFromCollection('categories');
            dispatch(setCategories(categoriesArray));
        };

        getCategoryData();
        // eslint-disable-next-line
    }, []);
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=':category' element={<Category/>}/>
        </Routes>
    );
}

export default Shop;