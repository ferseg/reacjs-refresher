"use client"

const { default: NewMeetupForm } = require(
  "@/components/meetups/NewMeetupForm",
);

const NewMeetup = () => {
  const addMeetupHandler = () => {
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
