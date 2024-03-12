import { render, screen, logRoles } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test('button starts with correct color', () => {
  const {container} = render(<App />);
  logRoles(container);

  const button = screen.getByRole('button', { name: /change to blue/i });

  expect(button).toHaveClass('red');
})

test('button starts with correct text', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: /change to blue/i });

  expect(button).toHaveTextContent('Change to blue');
})

test('button has correct color after click', async () => {
  render(<App />);

  const button = screen.getByRole('button', { name: /change to blue/i });
  await userEvent.click(button);

  expect(button).toHaveClass('blue');
})

test('button has correct text after click', async () => {
  render(<App />);

  const button = screen.getByRole('button', { name: /change to blue/i });
  await userEvent.click(button);

  expect(button).toHaveTextContent('Change to red');
})

test('button should be enabled and checkbox should be unchecked by default', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: /change to blue/i });
  const checkbox = screen.getByRole('checkbox', {name: /disable button/i});

  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();
})

test('button should be disabled after checkbox is checked', async () => {
  render(<App />);

  const button = screen.getByRole('button', { name: /change to blue/i });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  await userEvent.click(checkbox);

  expect(button).toBeDisabled();
});