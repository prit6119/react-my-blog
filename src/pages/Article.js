import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './Article-content';
import Articles from './Articles';
import NotFound from './NotFound'


const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name)
  if (!article) return <NotFound/>
  const otherArticle=articleContent.filter(article => article.name !== name)
  return (

    <>

      <h1 className='text-center wt-100  text-black  sm:text-2xl font-bold' my-4>{article.title}</h1>
      {article.content.map((paragraph, index) => (
        <p  key={index}>{paragraph} </p>

      ))}
<h1 className='text-center  text-black  sm:text-2xl font-bold my-6'>Other Articles</h1>
<Articles articles={otherArticle} />
    </>
  )
}

export default Article