import React from 'react'
import Medicine from '../../assets/images/Medicine.svg'
import {AiOutlineSearch} from "react-icons/ai"
import { Link } from 'react-router-dom'
import './header.css'
import Card from './Card'
import User from './User'
function Header() {
    window.addEventListener("scroll", function(){
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", this.window.scrollY > 100)
    })
    window.scrollTo({top:document.body.scrollHeight, behavior:"smooth"})
  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
            <Link to='/'>
              <img src={Medicine} alt='Medicine' />
            </Link>
            <div className='search flex'>
                <AiOutlineSearch className="searchIcon"/>
                <input type="text" placeholder="Search..."/>
            </div>
            <div className='account flexCenter'>
                <Card />
                <User />
            </div>
        </div>

    </header>
    </>
  )
}

export default Header