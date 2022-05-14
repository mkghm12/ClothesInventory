import DirectoryItem from '../category-item/directory-item.component';
import './inventory.styles.scss';

const Inventory = ({ categories }) => {
    return (
        <div className="inventory-container">
            {
                categories.map((category) => {
                    return (
                        <DirectoryItem key={category.id} category={category} />
                    );
                })
            }
        </div>
    )
}

export default Inventory;