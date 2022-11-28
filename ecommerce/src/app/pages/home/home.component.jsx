import React from 'react'
import CategoryHeading from '../../components/molecules/category-head/category-head.component'
import Navbar from '../../components/molecules/navbar/navbar.components'
import Main from '../../components/molecules/main/main'

const Home = () => {
  return (
    <div>
        <Navbar />
        <CategoryHeading />
        <Main />
    </div>
  )
}

export default Home