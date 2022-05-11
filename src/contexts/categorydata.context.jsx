import { useState, createContext, useEffect } from "react";
import { getDocumentsAndDataFromCollection } from "../utils/firebase/firebase.util.js";

export const CategoryDataContext = createContext({
    categoryData: {}
});

export const CategotyDataProvider = ({ children }) => {
    const [categoryData, setCategoryData] = useState({});

    useEffect(() => {
        const getCategoryData = async () => {
            const categoryMap = await getDocumentsAndDataFromCollection('categories');
            setCategoryData(categoryMap);
        };

        getCategoryData();
    }, []);

    const value = { categoryData };
    return (
        <CategoryDataContext.Provider value={value}>
            {children}
        </CategoryDataContext.Provider>
    )
}