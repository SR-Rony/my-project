import React, { useState } from 'react'
import Container from '../container/Container'
import List from '../list/List'
import ListItem from '../list/ListItem'
import Logo from '../../assets/sr.png'
import Images from '../images/Images'
import { FaBars } from "react-icons/fa";


const Navbar = () => {
    const [menu,setMenu]=useState(true)


  return (
    <nav className='fixed top-0 left-0 z-50 w-full bg-slate-900 border-b border-primary'>
        <Container>
            <div className=" md:grid grid-cols-12 items-center md:py-3 relative">
                <FaBars onClick={()=>setMenu(!menu)} className='absolute md:hidden top-5 right-0 cursor-pointer text-white text-xl'/>
                <div className="col-span-2">
                    <div className='w-20 h-20 rounded-full cursor-pointer overflow-hidden'>
                        <Images src={Logo} alt='logo'/>
                    </div>

                </div>
                <div className="col-span-10 justify-center grid md:justify-end pb-4 md:pb-0">
                    {menu &&
                        <List className='md:flex gap-5 text-xl font-semibold cursor-pointer text-white delay-500'>
                        <ListItem className='hover:text-primary delay-100' text='Home' path='#home'/>
                        <ListItem className='hover:text-primary delay-100' text='Abou Us' path='#about'/>
                        <ListItem className='hover:text-primary delay-100' text='Service' path='#service'/>
                        <ListItem className='hover:text-primary delay-100' text='Portfolio' path='#portfolio'/>
                        <ListItem className='hover:text-primary delay-100' text='Contact' path='#contact'/>
                    </List>
                    }
                </div>
                
            </div>
        </Container>
    </nav>
  )
}

export default Navbar