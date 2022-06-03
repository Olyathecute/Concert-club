import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import ListOfUsers from './pages/ListOfUsers/ListOfUsers'
import ListOfPosts from './pages/ListOfPosts/ListOfPosts'
import Profile from './pages/Profile/Profile'
import Post from './pages/Post/Post'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ListOfUsers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<ListOfPosts />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </>
  )
}

export default App
