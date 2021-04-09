import React from "react";
import Header from "./Header";
import ScheduledTime from "./scheduled-time";
import CourtSelectionBoard from "./court-picker";

const BookCourt: React.FC = () => {
    return <div className="book-court-layout">
        <Header/>
        <ScheduledTime />
        <CourtSelectionBoard />
    </div>
}

export default BookCourt