import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <Fragment>
      <MeetupDetail
        image="https://www.shutterstock.com/shutterstock/photos/1290353884/display_1500/stock-photo-aerial-top-down-photo-of-classic-motorcylce-event-festival-terrain-with-old-bikes-and-mopeds-parked-1290353884.jpg"
        alt="Our first meetups"
        title="Our first meetups"
        address="Our first meetup was held on 2020-01-01"
        description=" Our first meetup was a huge success! We had a great turnout and everyone
        had"
      />
    </Fragment>
  );
}

export default MeetupDetails;
