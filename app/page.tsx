import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";

const page = () => {
  return (
    <section>
      <p className="text-center text">
        The Hub for Every Dev
        <br /> Event You Can&apos;t Miss
      </p>
      <p className="mt-5 text-center">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>
      <div className="w-full flex items-center justify-center mt-5">
        <ExploreBtn />
      </div>
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event, i) => (
            <li key={i}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
