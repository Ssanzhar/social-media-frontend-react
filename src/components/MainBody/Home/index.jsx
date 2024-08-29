import { useEffect } from "react";
import Post from "../Post";
import response from "../../../data";

export default function Home() {
  return <>{response[3].abstract}</>;
}
