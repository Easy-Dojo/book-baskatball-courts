import React from 'react';
import Header from './Header';
import TimeScheduler from './time-scheduler';
import CourtSelectionBoard from './courts-selector';

const BookCourt: React.FC = () => (
  <div className="book-court-layout">
    <Header />
    <TimeScheduler />
    <CourtSelectionBoard />
  </div>
);

export default BookCourt;
