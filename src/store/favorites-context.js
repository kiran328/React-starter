import React, { useState } from "react";

const FavoriteContext = React.createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => {}
});

export const FavoriteContextProvider = (props) => {
  const [favoriteMeetups, setFavoriteMeetups] = useState([]);

  const addFavoriteMeetupHandler = (meetup) => {
    setFavoriteMeetups((prevMeetups) => {
      return [...prevMeetups, meetup];
    });
  };

  const removeFavoriteMeetupHandler = (meetupId) => {
    setFavoriteMeetups((prevMeetups) => {
      const updatedMeetups = prevMeetups.filter(
        (meetup) => meetup.id !== meetupId
      );
      return updatedMeetups;
    });
  };

  const isMeetupFavorited = (meetupId) => {
    return favoriteMeetups.some((meetup) => meetup.id === meetupId);
  };

  let context = {
    favorites: favoriteMeetups,
    totalFavorites: favoriteMeetups.length,
    addFavorite: addFavoriteMeetupHandler,
    removeFavorite: removeFavoriteMeetupHandler,
    isFavorite: isMeetupFavorited,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
