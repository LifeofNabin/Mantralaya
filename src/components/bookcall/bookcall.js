import React from 'react';
import { Link } from 'react-router-dom';
import './bookcall.css';

const BookCall = () => {
  return (
    <Link to="/schedule-call" className="book-call-btn">
      Book a Call
      
    </Link>
  );
};

export default BookCall;