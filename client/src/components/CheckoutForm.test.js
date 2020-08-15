import React from "react";
import { render, fireEvent, getByText, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm />);
    const header = getByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const {getByTestId, getByText} = render(<CheckoutForm />);
    const button = getByTestId('custom-element');
    fireEvent.click(button);
    const successMessage = getByText(/Your new green friends will be shipped to:/i);
    expect(successMessage).toBeInTheDocument();
});
