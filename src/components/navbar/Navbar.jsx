import React from 'react'
import Container from '../container/Container'
import List from '../list/List'
import ListItem from '../list/ListItem'
import Logo from '../../assets/sr.png'
import Images from '../images/Images'


const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 z-50 w-full bg-slate-900 border-b border-primary'>
        <Container>
            <div className="grid grid-cols-12 items-center py-3">
                <div className="col-span-2">
                        <Images className='w-20 h-20 rounded-full object-cover cursor-pointer' src={Logo} alt='logo'/>
                </div>
                <div className="col-span-10 grid justify-end">
                    <List className='flex gap-5 text-xl font-semibold cursor-pointer text-white'>
                        <ListItem className='hover:text-primary delay-100' text='Home'/>
                        <ListItem className='hover:text-primary delay-100' text='Abou Us'/>
                        <ListItem className='hover:text-primary delay-100' text='Service'/>
                        <ListItem className='hover:text-primary delay-100' text='Portfolio'/>
                        <ListItem className='hover:text-primary delay-100' text='Contact'/>
                    </List>
                </div>
                
            </div>
        </Container>
    </nav>
  )
}

export default Navbar