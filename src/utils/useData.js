import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = url => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const res = await axios(url);

        setState(res.data);
      } catch (error) {
        setError(true);
      }

      setLoading(false);
    };
    fetchData();
  }, [url]);
  return {
    state,
    loading,
    error
  };
};

export default useData;
