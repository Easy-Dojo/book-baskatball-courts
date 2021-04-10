import React from 'react';
import Header from './Header';
import TimeScheduler from './time-scheduler';
import CourtSelector from './courts-selector';

const BookCourt: React.FC = () => (
  <div className="book-court-layout">
    <Header />
    <TimeScheduler />
    <CourtSelector />
  </div>
);

export default BookCourt;
