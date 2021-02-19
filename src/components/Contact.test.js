import React from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";

test("renders the Contact Form Component ", () => {
  render(<ContactForm />);
});

test("when a user can fill out and submits the form", async () => {
  render(<ContactForm />);
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);

  //   console.log(firstNameInput);
  userEvent.type(firstNameInput, "Xavier");

  //   console.log(lastNameInput);
  userEvent.type(lastNameInput, "Twitty");

  //   console.log(emailInput);
  userEvent.type(emailInput, "goog@aim.com");

  //   console.log(messageInput);
  userEvent.type(messageInput, "all these words");
});
