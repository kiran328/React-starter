import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/Meetup/NewMeetupForm";

const NewMeetupPage = () => {
  const navigate = useNavigate();

  const addMeetupHandler = async (meetupData) => {
    await fetch("https://todoapp-319d5-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate('/')
  };

  return (
    <section>
      <h1>New Meetups</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
