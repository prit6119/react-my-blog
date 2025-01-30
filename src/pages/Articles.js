import React from 'react';
import { Link } from 'react-router-dom';

const Articles = ({articles}) => {
  return (
    <>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link to={`/article/${article.name}`}>
              <img
                src={article.thumbnail}
                alt={`Thumbnail for ${article.title}`}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{article.title}</h2>
              <p className="text-gray-600 mt-2 line-clamp-2">
                {article.content.length > 100
                  ? `${article.content.substring(0, 100)}...`
                  : article.content}
              </p>
              <Link
                to={`/article/${article.name}`}
                className="inline-block mt-4 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Articles