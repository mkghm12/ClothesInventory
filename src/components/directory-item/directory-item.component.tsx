import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryItemType } from "../directory/directory.component";
import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles";


type DirectoryItemPropsType = {
  category: CategoryItemType;
}
const DirectoryItem:FC<DirectoryItemPropsType> = ({ category }) => {
  const { title, imageUrl,route } = category;
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate(route);
  }
  return (
    <DirectoryItemContainer onClick={navigationHandler}>
      <BackgroundImage imageUrl={imageUrl}/>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;