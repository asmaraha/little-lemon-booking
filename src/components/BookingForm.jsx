import React, { useState } from "react";
import { validateForm } from "../utils/formValidation";

const BookingForm = ({ onBookingSuccess }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: 1,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted:", formData);
            // Simulate API submission success
            setTimeout(() => {
                onBookingSuccess();
            }, 500);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit} aria-label="Booking Form">
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            {errors.name && <span>{errors.name}</span>}

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            {errors.email && <span>{errors.email}</span>}

            <label htmlFor="date">Date:</label>
            <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
            {errors.date && <span>{errors.date}</span>}

            <label htmlFor="time">Time:</label>
            <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
            />
            {errors.time && <span>{errors.time}</span>}

            <label htmlFor="guests">Number of Guests:</label>
            <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="20"
                value={formData.guests}
                onChange={handleChange}
                required
            />
            {errors.guests && <span>{errors.guests}</span>}

            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;
