export const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) errors.name = "Name is required.";
    if (!data.email.includes("@")) errors.email = "Valid email is required.";
    if (!data.date) errors.date = "Date is required.";
    if (!data.time) errors.time = "Time is required.";
    if (data.guests < 1) errors.guests = "At least one guest is required.";
    return errors;
};
