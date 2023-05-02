"use client";
import MeetupList from "@/components/meetups/MeetupList";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const DUMMY = [
  {
    id: "i1",
    title: "Title",
    description: "description",
    address: "Some address",
    image:
      "https://www.travelmanagers.com.au/wp-content/uploads/2012/08/AdobeStock_254529936_Railroad-to-Denali-National-Park-Alaska_750x500.jpg",
  },
];

export default function Home() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setMeetups(DUMMY);
  }, []);
  return (
    <main className={styles.main}>
      <MeetupList meetups={meetups} />
    </main>
  );
}
