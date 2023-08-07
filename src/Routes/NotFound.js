import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className='text-center'>
        <img className='w-50 h-100' src="https://blog.thomasnet.com/hs-fs/hubfs/shutterstock_774749455.jpg?width=900&name=shutterstock_774749455.jpg" alt='not-found' />
        <p>We're sorry, the page you requested could not be found. Please go back to the homepage or contact us at <a href="mailto:info@97tattoos.com">info@97tattoos.com</a></p>
    </Container>
  )
}

export default NotFound