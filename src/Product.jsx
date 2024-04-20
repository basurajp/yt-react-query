import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAllproducts } from "./Products";

const Product = () => {
  const params = useParams();

  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["product", params.productId],
    queryFn: getAllproducts,
  });

  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.put(`https://dummyjson.com/products/`, newProduct);
    }
  });

  return (
    <div>
      <h1>the product is {params.productId}</h1>

      <button
        onClick={() => {
          mutation.mutate({ title : "Do Laundry" });
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

export default Product;
