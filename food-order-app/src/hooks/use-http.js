import { useCallback, useState } from "react";

const useHttp = (baseUrl) => {
  const [isLoading, setIsLoading] = useState(false);

  const makeRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    const httpResponse = await fetch(`${baseUrl}/${requestConfig.url}`, {
      method: requestConfig.method || "GET",
      headers: requestConfig.headers || {},
      body: (requestConfig.body && JSON.stringify(requestConfig.body)) || null,
    });

    if (!httpResponse.ok) {
      setIsLoading(false);
      throw new Error('Something went wrong')
    }

    const result = await httpResponse.json();
    setIsLoading(false);
    return result;
  }, [baseUrl]);

  return {
    isLoading,
    makeRequest,
  };
};

export default useHttp;
