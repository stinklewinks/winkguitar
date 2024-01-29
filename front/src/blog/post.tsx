import React from 'react'
import { Blog } from './blog'

const post = new Blog();

function Post() {
  return (
    <>
    <article>
        <h2>{post.getTitle()}</h2>
        <span>{post.getAuthor()}</span>
        <p>
            {post.getContent()}
        </p>
    </article>
    <aside>
        {post.getDesc()}
    </aside>
    </>
  )
}

export default Post