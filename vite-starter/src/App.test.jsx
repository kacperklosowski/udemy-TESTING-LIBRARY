import { render, screen, logRoles } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { kebabCaseToTitleCase } from "./helpers";

test('button starts with correct color', () => {
  const {container} = render(<App />);
  logRoles(container);

  const button = screen.getByRole('button', { name: /change to midnight blue/i });

  expect(button).toHaveClass('medium-violet-red');
})

test('button starts with correct text', () => {
  render(<App />);

  const button = screen.getByRole('button', { name:  /change to midnight blue/i });

  expect(button).toHaveTextContent(/Change to Midnight Blue/i);
})

test('button has correct color after click', async () => {
  render(<App />);

  const button = screen.getByRole('button', { name:  /change to midnight blue/i });
  await userEvent.click(button);

  expect(button).toHaveClass('midnight-blue');
})

test('button has correct text after click', async () => {
  render(<App />);

  const button = screen.getByRole('button', { name: /change to midnight blue/i });
  await userEvent.click(button);

  expect(button).toHaveTextContent(/Change to Medium Violet Red/i);
})

test('button should be enabled and checkbox should be unchecked by default', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: /change to midnight blue/i });
  const checkbox = screen.getByRole('checkbox', {name: /disable button/i});

  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();
})

test('button should be disabled after checkbox is checked and enabled after second click', async () => {
  render(<App />);

  const button = screen.getByRole('button', { name: /change to midnight blue/i });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  await userEvent.click(checkbox);

  expect(button).toBeDisabled();
  expect(button).toHaveClass('grey');

  await userEvent.click(checkbox);

  expect(button).toBeEnabled();
  expect(button).toHaveClass('medium-violet-red');
});

describe('kebabCaseToTitleCase', () => {
  test('works for no hyphens', () => {
    expect(kebabCaseToTitleCase('red')).toBe('Red');
  });

  test('works for one hyphen', () => {
    expect(kebabCaseToTitleCase('midnight-blue')).toBe('Midnight Blue');
  })
  test('works for multiple hyphens', () => {
    expect(kebabCaseToTitleCase('medium-violet-red')).toBe('Medium Violet Red');
  })
})