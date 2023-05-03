import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe("Greetings suite", () => {
  test("renders hello world as a text", () => {
    render(<Greetings />);
    const helloWorldText = screen.getByText("Hello World!");
    expect(helloWorldText).toBeInTheDocument();
  });

  test('renders default text without clicking the button', () => {
    render(<Greetings />);
    const defaultText = screen.getByText("Text 1");
    expect(defaultText).toBeInTheDocument();
  })

  test('renders secondary text after toggling', () => {
    render(<Greetings />);
    const btnElement = screen.getByRole('button');
    userEvent.click(btnElement);
    const text = screen.getByText("Text 2");
    expect(text).toBeInTheDocument();
  })

  test('renders secondary text after toggling and the text1 does not show', () => {
    render(<Greetings />);
    const btnElement = screen.getByRole('button');
    userEvent.click(btnElement);
    const text = screen.queryByText("Text 1");
    expect(text).not.toBeInTheDocument();
  })
});
