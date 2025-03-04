import React from 'react'
import UserList from '../components/UserList'
import logo from '../assets/logo.svg'

const Home = () => {
  return (
    <div>
        <h1>Danh sách người dùng</h1>
        <img src={logo} className='logo' alt="logo" />
        <UserList></UserList>
    </div>
  )
}

export default Home