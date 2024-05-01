import useAxiosSecure from "./useAxiosSecure";

import { useQuery } from "react-query";
import { TProject } from "@/types";

const useProjectData = () => {
  const { axiosSecure } = useAxiosSecure();

  const {
    refetch,
    data = [],
    isLoading,
    status,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await axiosSecure.get("/projects");
      return response.data;
    },
  });

  return {
    isLoading,
    error,
    status,
    data,

    refetch,
  };
};

export default useProjectData;
