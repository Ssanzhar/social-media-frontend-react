import { useEffect, useState } from "react";
import { fetchData } from "../../../data/index";
import Post from "../Post";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchData();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
    console.log(data);
  }, []);

  const createId = () => {
    const id = new Date().toISOString();

    return id;
  };

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  if (!data) return <div>no data</div>;

  return (
    <div style={{ display: "block" }}>
      {data?.map((article) => (
        <Post
          key={() => createId()}
          text={article.abstract}
          author={article.author_display}
          date={article.publication_date}
          title={article.title_display}
        />
      ))}
    </div>
  );
}
