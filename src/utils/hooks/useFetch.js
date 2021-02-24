import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL = `http://localhost:8888/`;
  const [ids, setIds] = useState({});
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isFullTimeOnly, setIsFullTimeOnly] = useState("");

  const getIds = () => {
    // make a dictionary of ids -> indexes in data
    let ids = {};
    jobs.forEach((info, i) => {
      ids[info["id"]] = i;
    });
    setIds(ids);
  };

  const fetchData = () => {
    setIsLoading(true);

    const getJobs = async () => {
      const response = await axios.post(`${BASE_URL}fetch`);

      if (response.status !== 200) {
        throw new Error("cannot fetch data");
      }

      const data = await response.data;

      return data;
    };

    getJobs()
      .then((data) => {
        setIsLoading(false);
        setJobs(data);
        console.log(data);
      }, getIds)
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const queryJobs = () => {
    setIsLoading(true);

    const getJobs = async () => {
      const options = {
        description,
        location,
        isFullTimeOnly,
        page,
      };

      const response = await axios.post(`${BASE_URL}query`, options);

      if (response.status !== 200) {
        throw new Error("cannot fetch data");
      }

      const data = await response.data;

      return data;
    };

    getJobs()
      .then((data) => {
        setIsLoading(false);
        setJobs(data);
      }, getIds)
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const getJobs = async () => {
      const options = {
        description,
        location,
        isFullTimeOnly,
        nextPage,
      };

      const response = await axios.post(`${BASE_URL}load`, options);

      if (response.status !== 200) {
        throw new Error("cannot fetch data");
      }

      const data = await response.data;

      return data;
    };

    getJobs()
      .then((data) => {
        setIsLoading(false);
        if (data.length > 0) {
          setJobs(jobs.concat(data));
        }
      }, getIds)
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  useEffect(fetchData, []);

  return {
    jobs,
    ids,
    isLoading,
    queryJobs,
    loadMore,
    fetchData,
    setDescription,
    setLocation,
    setIsFullTimeOnly,
  };
};

export default useFetch;
