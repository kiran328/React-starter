import { useEffect, useState } from "react";

import MeetupList from "../components/Meetup/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch("https://todoapp-319d5-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => res.json())
      .then((data) => {
        const allMeetups = [];
        for (const meetupKey in data) {
          const { title, image, address, description } = data[meetupKey];
          allMeetups.push({
            id: meetupKey,
            title,
            image,
            address,
            description,
          });
        }
        setIsLoading(false);
        setLoadedMeetups(allMeetups);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
