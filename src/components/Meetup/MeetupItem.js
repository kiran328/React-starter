import { useContext } from "react";

import Card from "./../UI/Card";
import classes from "./MeetupItem.module.css";
import FavoriteContext from "../../store/favorites-context";

const MeetupItem = (props) => {
  const ctx = useContext(FavoriteContext);

  const isItemFavorite = ctx.isFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (isItemFavorite) {
      ctx.removeFavorite(props.id);
    } else {
      ctx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h2>{props.title}</h2>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {isItemFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
