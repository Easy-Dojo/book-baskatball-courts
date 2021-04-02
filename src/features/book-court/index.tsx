import React from "react";
import Header from "./Header";
import ScheduledTime from "./scheduled-time";
import CourtPicker from "./court-picker";

const BookCourt: React.FC = () => {
    return <div className="book-court-layout">
        <Header/>
        <ScheduledTime />
        <CourtPicker />
    </div>
}

export default BookCourt