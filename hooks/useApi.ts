import axios from "axios";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

export let baseUrl = "http://localhost:3000/api";

if (process.env.NODE_ENV === "production") {
  baseUrl = process.env.NEXT_PUBLIC_API_URL as string;
}

export const getUserInfo: () => UserLocalStorageType | null = () => {
  const _user = localStorage.getItem("user");
  return typeof window !== "undefined" && _user
    ? JSON.parse(typeof window !== "undefined" && (_user as string | any))
    : null;
};

export const config = () => {
  const _user = getUserInfo();
  if (!_user) return;
  return {
    headers: {
      Authorization: `Bearer ${_user.token}`,
    },
  };
};

//interceptor
export const api = async (method: string, url: string, obj = {}) => {
  try {
    switch (method) {
      case "GET":
        return await axios
          .get(`${baseUrl}/${url}`, config())
          .then((res) => res.data);

      case "POST":
        return await axios
          .post(`${baseUrl}/${url}`, obj, config())
          .then((res) => res.data);

      case "PUT":
        return await axios
          .put(`${baseUrl}/${url}`, obj, config())
          .then((res) => res.data);

      case "DELETE":
        return await axios
          .delete(`${baseUrl}/${url}`, config())
          .then((res) => res.data);
    }
  } catch (error: any) {
    const err = error?.response?.data?.error || "Something went wrong";
    const expectedErrors = ["invalid signature", "jwt expired"];
    if (expectedErrors.includes(err)) {
      localStorage.removeItem("userInfo");
      window.location.reload();
    }
    throw err;
  }
};

type Method = "GET" | "POST" | "PUT" | "DELETE";

interface ApiHookParams {
  key: string[];
  method: Method;
  url: string;
}

export default function useApi({ key, method, url }: ApiHookParams) {
  const queryClient = new QueryClient();
  switch (method) {
    case "GET":
      // eslint-disable-next-line
      const get = useQuery({
        queryKey: key,
        queryFn: () => api(method, url, {}),
        retry: 0,
      });

      return { get };

    case "POST":
      // eslint-disable-next-line
      const post = useMutation({
        mutationFn: (obj: any) => api(method, url, obj),
        retry: 0,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: key });
        },
      });
      return { post };

    case "PUT":
      // eslint-disable-next-line
      const put = useMutation({
        mutationFn: (obj: any) => api(method, `${url}/${obj?.id}`, obj),
        retry: 0,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: key }),
      });

      return { put };

    case "DELETE":
      // eslint-disable-next-line
      const deleteObj = useMutation({
        mutationFn: (id: string) => api(method, `${url}/${id}`),
        retry: 0,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: key }),
      });
      return { deleteObj };

    default:
      throw new Error(`Invalid method ${method}`);
  }
}
