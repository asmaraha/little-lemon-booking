import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders the booking form", () => {
    render(<BookingForm />);
    expect(screen.getByLabelText("Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    expect(screen.getByLabelText("Date:")).toBeInTheDocument();
    expect(screen.getByLabelText("Time:")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of Guests:")).toBeInTheDocument();
});

test("validates the form", () => {
    render(<BookingForm />);
    fireEvent.submit(screen.getByRole("form"));
    expect(screen.getByText("Name is required.")).toBeInTheDocument();
});
