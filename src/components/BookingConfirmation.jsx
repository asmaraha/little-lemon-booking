import React from 'react';

const BookingConfirmation = ({ onGoBack }) => (
    <div>
        <h2>Thank you for your booking!</h2>
        <p>Your reservation has been confirmed. We look forward to serving you.</p>
        <button onClick={onGoBack}>Book Another Table</button>
    </div>
);

export default BookingConfirmation;
