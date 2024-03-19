import SummaryForm from "../SummaryForm";
import { render, screen, fireEvent } from "@testing-library/react";

describe('SummaryForm', () => {
  it('should render unchecked checkbox and disabled button as initial state', () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i});
    const confirmButton = screen.getByRole('button', { name: /confirm order/i});

    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });

  it('should enable button on first checkbox click, and disable it on second click', () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i});
    const confirmButton = screen.getByRole('button', { name: /confirm order/i});

    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });
})