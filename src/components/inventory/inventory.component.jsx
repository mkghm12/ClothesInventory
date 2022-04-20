import CategoryItem from '../category-item/category-item.component';
import './inventory.styles.scss';

const Inventory = ({ categories }) => {
    return (
        <div className="inventory-container">
            {
                categories.map((category) => {
                    return (
                        <CategoryItem key={category.id} category={category} />
                    );
                })
            }
        </div>
    )
}

export default Inventory;