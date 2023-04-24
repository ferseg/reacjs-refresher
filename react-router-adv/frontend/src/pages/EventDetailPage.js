import {
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  if (!data.event) {
    return <p>No events available</p>;
  }
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetailPage;

export const eventLoader = async ({ params }) => {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: "Could not retrieve details for the selected event" },
      { status: 500 }
    );
  }
  return response;
};

export const deleteEventAction = async ({ params }) => {
  await fetch(`http://localhost:8080/events/${params.eventId}`, {
    method: "DELETE",
  });
  return redirect("/events");
};
