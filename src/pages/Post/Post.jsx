import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../features/posts/postsSlice'
import { getComments } from '../../features/comments/commentsSlice'
import Comment from '../../components/Comment/Comment'
import Button from '../../components/Button/Button'
import Loader from '../../components/Loader/Loader'
import style from './Post.module.scss'

export default function Post() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const post = useSelector(state => state.posts[id - 1])
  const comments = useSelector(state => state.comments)

  useEffect(() => {
    dispatch(getPosts())
    dispatch(getComments())
  }, [dispatch])

  if (!post) return <Loader />

  return (
    <div className={style.wrapper}>
      <div className={style.go_back}>
        <Link to="/posts" className={style.link}>
          <div>... ко всем постам</div>
        </Link>
      </div>

      <div className={style.post}>
        <div className={style.title}>{post.title}</div>
        <div className={style.body}>{post.body}</div>
      </div>

      {comments.map(({ name, body, email }, index) => (
        <Comment key={index} author={name} body={body} email={email} />
      ))}

      <Button name="Добавить комментарий" />
    </div>
  )
}
