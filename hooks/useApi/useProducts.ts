import { notFound } from "next/navigation";
import useApi from "./useApi";

const useGetProducts = () => {
  const getApi = useApi({
    key: ["product"],
    method: "GET",
    url: `products`,
  });
  return getApi?.get;
};

const useGetProduct = (id: string) => {
  const getApi = useApi<ProductResponseType>({
    key: ["product", id],
    method: "GET",
    url: `products/${id}`,
  });
console.log(getApi.get?.error?.status);
  if (getApi.get?.error?.status === 404) return notFound();

  return getApi.get;
};

const usePostProducts = (body: ProductRequestBody) => {
  const postApi = useApi({
    key: ["product"],
    method: "POST",
    url: `products`,
  });
  postApi.post?.mutateAsync({ ...body });
  return postApi?.post;
};

const usePutProducts = (body: ProductRequestBody) => {
  const putApi = useApi({
    key: ["product"],
    method: "PUT",
    url: `products/${body?.id}`,
  });
  putApi.put?.mutateAsync({ ...body });
  return putApi?.put;
};

const useDeleteProducts = (id: string) => {
  const deleteApi = useApi({
    key: ["product"],
    method: "DELETE",
    url: `products/${id}`,
  });
  deleteApi.deleteObj?.mutateAsync(id);
  return deleteApi?.deleteObj;
};

export {
  useGetProduct,
  useGetProducts,
  usePostProducts,
  usePutProducts,
  useDeleteProducts,
};
