import data from "../../../articles.json";
import Article from "../Article/Article";

const ArticleList = () => {
  return (
    <div className="grid gap-5 xl:grid-cols-3 sm:grid-cols-2 mt-5 mx-5 sm:m-auto max-w-4xl dark:text-gray-100">
      {data.map((props, index) => (
        <Article key={index} {...props} />
      ))}
    </div>
  );
};

export default ArticleList;
