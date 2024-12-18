import React, { useState } from "react";
import BookingForm from "../components/BookingForm";
import BookingConfirmation from "../components/BookingConfirmation";

const BookingPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleBookingSuccess = () => {
        setIsSubmitted(true);
    };

    const handleGoBack = () => {
        setIsSubmitted(false);
    };

    return (
        <div>
            <h1>Book a Table</h1>
            {isSubmitted ? (
                <BookingConfirmation onGoBack={handleGoBack} />
            ) : (
                <BookingForm onBookingSuccess={handleBookingSuccess} />
            )}
        </div>
    );
};

export default BookingPage;
