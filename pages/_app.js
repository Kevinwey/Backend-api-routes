import GlobalStyle from "../styles";
import { SWRConfig, useSWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  const fetcher = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      const error = new Error("An error occurred while fetching data.");
      error.info = await response.json();
      error.status = response.status;
      throw error;
    }
    return response.json();
  };
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
