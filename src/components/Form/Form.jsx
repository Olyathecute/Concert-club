import React, { createRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../../features/comments/commentsSlice'
import Button from '../Button/Button'
import style from './Form.module.scss'

const emailReg = /^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$/i

export default function Form({ close }) {
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

    if (!author.value) currentErrors.author = true
    if (!email.value.match(emailReg)) currentErrors.email = true
    if (!comment.value) currentErrors.comment = true

    if (Object.values(currentErrors).some(Boolean)) {
      setErrors(currentErrors)
    } else {
      dispatch(addComment({ name: author.value, email: email.value, body: comment.value }))
      close()
    }
  }

  return (
    <div className={style.wrapper}>
      <form ref={form}>
        <input type="text" name="author" placeholder="Ваше имя ..." className={errors.author && style.error} />
        <input type="email" name="email" placeholder="Ваш email ..." className={errors.email && style.error} />
        <textarea name="comment" placeholder="Оставьте свой комментарий..." className={errors.comment && style.error}></textarea>
      </form>

      <div className={style.button_group}>
        <div>
          <Button onClick={close} name="Закрыть" color="black" />
        </div>
        <div>
          <Button onClick={sendComment} name="Отправить" color="black" />
        </div>
      </div>
    </div>
  )
}
