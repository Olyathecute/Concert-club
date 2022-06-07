import React, { createRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../../features/comments/commentsSlice'
import Button from '../Button/Button'
import style from './Form.module.scss'

export default function Form({ formOpen }) {
  const reg = /^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$/i
  const form = createRef()
  const dispatch = useDispatch()

  const [errors, setErrors] = useState({
    author: false,
    email: false,
    comment: false
  })

  const sendComment = () => {
    const currentErrors = { author: false, email: false, comment: false }
    const [author, email, comment] = form.current
    let hasErrors = false

    if (!author.value) currentErrors.author = hasErrors = true
    if (!email.value.match(reg)) currentErrors.email = hasErrors = true
    if (!comment.value) currentErrors.comment = hasErrors = true

    if (hasErrors) {
      setErrors(currentErrors)
    } else {
      dispatch(addComment({ name: author.value, email: email.value, body: comment.value }))
      formOpen(false)
    }
  }

  return (
    <div className={style.wrapper}>
      <form ref={form}>
        <input type="text" name="author" placeholder="Ваше имя ..." className={errors.author ? style.error : null} />
        <input type="email" name="email" placeholder="Ваш email ..." className={errors.email ? style.error : null} />
        <textarea name="comment" placeholder="Оставьте свой комментарий..." className={errors.comment ? style.error : null}></textarea>
      </form>

      <div className={style.button_group}>
        <div>
          <Button onClick={() => formOpen(false)} name="Закрыть" />
        </div>
        <div>
          <Button onClick={sendComment} name="Отправить" />
        </div>
      </div>
    </div>
  )
}
