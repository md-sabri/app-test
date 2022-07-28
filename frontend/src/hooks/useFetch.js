import { useEffect, useState } from "react";
import { API } from "../constant/api";

export function useFetch(path) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await fetch(`${API}/${path}`, { method: "GET" });

        if (response.ok) {
          const json = await response.json();
          setData(json);
          setIsLoading(false);
          return;
        }
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, error, isLoading };
}
