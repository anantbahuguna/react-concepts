import { useEffect } from "react";
import { useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

function useBasicFetch(query) {
  const [data, setData] = useState();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState();

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async () => {
      try {
        setStatus("fetching");
        const response = await fetch(`${BASE_URL}${query}/1`);
        if (!response.ok) {
          // make the promise be rejected if we didn't get a 2xx response
          throw new Error(`Response status: ${response.status}`);
        }
        const newData = await response.json();
        setData(newData);
        setStatus("success");
        setError();
      } catch (error) {
        setStatus("failed");
        setError(error.message);
        setData();
      }
    };

    fetchData();
  }, [query]);

  return [data, status, error];
}

export default useBasicFetch;
