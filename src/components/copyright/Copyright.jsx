import React from 'react'
import Container from '../container/Container'
import Paragraph from '../paragraph/Paragraph'

const Copyright = () => {
  return (
    <footer className='bg-black py-10'>
        <Container>
            <div className='md:flex items-center justify-between text-white text-center'>
                <p className='font-poppins text-base md:text-xl font-medium mb-3 md:mb-0'>Copyright © 2023 <span className='text-primary'>SR Rony</span>. All Rights Reserved.</p>
                <div className='flex gap-5 md:gap-10 items-center justify-center'>
                    <Paragraph text='Terms & Policy'/>
                    <Paragraph text='Disclaimer'/>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Copyright