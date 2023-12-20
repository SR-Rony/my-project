import React from 'react'
import Container from '../container/Container'
import Paragraph from '../paragraph/Paragraph'

const Copyright = () => {
  return (
    <footer className='bg-black py-10'>
        <Container>
            <div className='flex items-center justify-between text-white'>
                <p className='font-poppins text-xl font-medium'>Copyright © 2023 <span className='text-primary'>SR Rony</span>. All Rights Reserved.</p>
                <div className='flex gap-10 items-center'>
                    <Paragraph text='Terms & Policy'/>
                    <Paragraph text='Disclaimer'/>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Copyright