import { notFound } from "next/navigation";
import useApi from "./useApi";

const useGetUser = (id: string) => {
  const getApi = useApi({
    key: ["user", id],
    method: "GET",
    url: `users/${id}`,
  });
  if (getApi.get?.error?.status === 404) return notFound();
  return getApi?.get;
};

const useGetUsers = () => {
  const getApi = useApi({
    key: ["user"],
    method: "GET",
    url: `users`,
  });
  return getApi?.get;
};

const usePostUser = (body: UserRequestBody) => {
  const postApi = useApi({
    key: ["user"],
    method: "POST",
    url: `users`,
  });
  postApi.post?.mutateAsync({ ...body });
  return postApi?.post;
};

const usePutUser = (body: UserRequestBody) => {
  const putApi = useApi({
    key: ["user"],
    method: "PUT",
    url: `users/${body?.id}`,
  });
  putApi.put?.mutateAsync({ ...body });
  return putApi?.put;
};

const useDeleteUser = (id: string) => {
  const deleteApi = useApi({
    key: ["user"],
    method: "DELETE",
    url: `users/${id}`,
  });
  deleteApi.deleteObj?.mutateAsync(id);
  return deleteApi?.deleteObj;
};

export { useGetUser, useGetUsers, usePostUser, usePutUser, useDeleteUser };
