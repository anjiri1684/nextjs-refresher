import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Meetup 1",
    image:
      "https://media.istockphoto.com/id/1324554565/vector/marketing-meetup-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=4e-GZZ905EHXdK5l2OX8W2oZgC8sQRDcTh4TpdrCwxk=",
    address: "Meetup 1 address",
    description: "Meetup 1 description",
  },
  {
    id: "m2",
    title: "Meetup 2",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1290353884/display_1500/stock-photo-aerial-top-down-photo-of-classic-motorcylce-event-festival-terrain-with-old-bikes-and-mopeds-parked-1290353884.jpg",
    address: "Meetup 2 address",
    description: "Meetup 2 description",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(loadedMeetups);
  }, []);

  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
