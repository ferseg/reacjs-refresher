import { useCallback } from "react";

const useHttp = (baseUrl) => {
  const makeRequest = useCallback(async (requestConfig) => {
    const httpResponse = await fetch(`${baseUrl}/${requestConfig.url}`, {
      method: requestConfig.method || "GET",
      headers: requestConfig.headers || {},
      body: (requestConfig.body && JSON.stringify(requestConfig.body)) || null,
    });

    return await httpResponse.json();
  }, [baseUrl]);

  return {
    makeRequest,
  };
};

export default useHttp;
