import React, { Component } from 'react';
import articleContent from './Article-content';

// Component
import Articles from './Articles'

const ArticleList = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-center text-2xl font-bold text-black mb-6">Article List</h1>
     <Articles articles={articleContent} />
    </div>
  );
};

export default ArticleList;
