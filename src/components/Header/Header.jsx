import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'
const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar/>
            <div className="header-content flex flex-c text-center text-white">
                <h2 className="header-title text capitalize">Find your book of choice</h2> <br />
                <p className="header-text fs-10 fw-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perferendis nesciunt architecto asperiores sapiente nisi ex reiciendis, neque facilis consequatur omnis alias itaque sunt ipsam obcaecati? Esse impedit facilis hic.</p>
                <SearchForm/>
            </div>
        </header>
    </div>
  )
}

export default Header
