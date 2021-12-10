import axios from "axios";
import { useState, useEffect } from "react";
const useAxiosOnMount = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // for testing UI want to remove this
    setTimeout(() => {
      getData();
    }, 400);
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      let res = await axios.get(url);

      // this is making an assumption that this how the data is coming back
      setData(res.data);
      setLoading(false);
    } catch (err) {
      // TODO: send back a better error message
      setError("Error occured");
      setLoading(false);
    }
  };

  return { data: data, error: error, setData: setData, loading: loading };
};

export default useAxiosOnMount;
