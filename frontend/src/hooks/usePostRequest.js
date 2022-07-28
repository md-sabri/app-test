import { useState } from "react";
import { API } from "../constant/api";

export function usePostRequest(path) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const PostRequest = (data) => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await fetch(`${API}/${path}`, {
          method: "POST",
          body: JSON.stringify(data),
        });

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
  };

  return [PostRequest, { data, error, isLoading }];
}
