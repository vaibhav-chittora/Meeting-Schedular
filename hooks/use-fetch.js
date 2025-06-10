import { useState } from "react";

const useFetch = async (cb) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
    } catch (error) {
      console.log("Error in useFetch:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    data,
    error,
    loading,
    fn,
  };
};

export default useFetch;
