import axios from "axios";

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000", // base url
  });

  return { axiosSecure };
};

export default useAxiosSecure;
