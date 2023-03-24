import styled from "styled-components";
import useSWR from "swr";

export default function Products() {
  const { data, isLoading, error } = useSWR("/api/products");
  if (isLoading) return <>Loading...</>;
  if (error) return <>{error}</>;

  return (
    <ul>
      {data.map((product) => {
        return (
          <li key={product.id}>
            <h2>{product.name}</h2>{" "}
            <p>
              <strong>{product.category}</strong>
            </p>
            <p>{product.description}</p>
            <p>
              {product.price}
              {product.currency}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
