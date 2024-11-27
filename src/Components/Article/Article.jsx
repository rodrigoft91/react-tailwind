import React from "react";

const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="p-5 bg-gray-200 dark:bg-slate-600 rounded-2xl shadow-md">
      <h3 className="text-xl text-slate-900 mb-3">{title}</h3>
      <div>
        {text.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>
    </div>
  );
};

export default Article;
