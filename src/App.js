import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import ListOfUsers from './components/ListOfUsers/ListOfUsers'
import Profile from './components/Profile/Profile'
import Post from './components/Post/Post'
import Posts from './components/Post/Post'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ListOfUsers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  )
}

export default App
