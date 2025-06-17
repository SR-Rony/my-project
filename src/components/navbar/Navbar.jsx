import React, { useEffect, useState } from 'react'
import Container from '../container/Container'
import List from '../list/List'
import ListItem from '../list/ListItem'
import Logo from '../../assets/sr.png'
import Images from '../images/Images'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const [menu,setMenu]=useState(true)
    useEffect(()=>{
        const scroolWidth =()=>{
            if(window.innerWidth < 768){
                setMenu(false)
            }else{
                setMenu(true)
            }
        }
        scroolWidth()
        window.addEventListener("resize",scroolWidth)
    },[]);


  return (
    <nav data-aos="fade-down" className='fixed top-0 left-0 z-50 w-full bg-slate-900 border-b border-primary'>
        <Container>
            <div className=" md:grid grid-cols-12 items-center relative">
                {menu
                    ?<RxCross2 onClick={()=>setMenu(false)} className='absolute md:hidden top-8 right-3 cursor-pointer text-white text-xl'/>
                    :<FaBars onClick={()=>setMenu(true)} className='absolute md:hidden top-8 right-3 cursor-pointer text-white text-xl'/>
                }
                <div className="col-span-2">
                    <div className='w-20 h-20 rounded-full cursor-pointer overflow-hidden'>
                        <Images src={Logo} alt='logo'/>
                    </div>

                </div>
                <div className="col-span-10 justify-center grid md:justify-end">
                    {menu &&
                    <List className='md:flex pt-3 md:pt-0 gap-5 text-xl font-semibold cursor-pointer delay-500 text-center '>
                        <ListItem className='hover:text-primary text-white delay-100 py-1 md:py-0 relative after:absolute after:-bottom-3 after:left-0 after:w-0 lg:hover:after:w-full after:h-1 duration-100 after:bg-primary' text='Home' path='#home'/>
                        <ListItem className='hover:text-primary text-white delay-100 py-1 md:py-0 relative after:absolute after:-bottom-3 after:left-0 after:w-0 lg:hover:after:w-full after:h-1 duration-100 after:bg-primary' text='Abou Us' path='#about'/>
                        <ListItem className='hover:text-primary text-white delay-100 py-1 md:py-0 relative after:absolute after:-bottom-3 after:left-0 after:w-0 lg:hover:after:w-full after:h-1 duration-100 after:bg-primary' text='Service' path='#services'/>
                        <ListItem className='hover:text-primary text-white delay-100 py-1 md:py-0 relative after:absolute after:-bottom-3 after:left-0 after:w-0 lg:hover:after:w-full after:h-1 duration-100 after:bg-primary' text='Portfolio' path='#portfolio'/>
                        <ListItem className='hover:text-primary text-white delay-100 py-1 md:py-0 relative after:absolute after:-bottom-3 after:left-0 after:w-0 lg:hover:after:w-full after:h-1 duration-100 after:bg-primary' text='Contact' path='#contact'/>
                    </List>
                    }
                </div>
                
            </div>
        </Container>
    </nav>
  )
}

export default Navbar