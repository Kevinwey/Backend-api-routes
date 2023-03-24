import useSWR from "swr";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useSWR(id ? `/api/products/${id}` : null);
  if (isLoading || !data) return "is loading";
  if (error) return <>{error}</>;

  const product = data;

  return (
    <>
      <h2>{product.name}</h2>{" "}
      <p>
        <strong>{product.category}</strong>
      </p>
      <p>{product.description}</p>
      <p>
        {product.price}
        {product.currency}
      </p>
    </>
  );
}
