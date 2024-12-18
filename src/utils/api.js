export const submitBooking = async (formData) => {
    try {
        const response = await fetch('/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Booking failed');
        }
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: error.message };
    }
};
