import { useState, useEffect } from "react";
import jobcard from "./jobCard";

function App() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const user = await response.json();
        const firstTen = user.slice(0, 10);
        setJobs(firstTen);
        setLoading(false);
      } catch {
        console.log("error");
        setLoading(false);
      }
    }
  }, []);
}
