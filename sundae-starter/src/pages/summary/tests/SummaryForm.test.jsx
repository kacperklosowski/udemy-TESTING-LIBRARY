import SummaryForm from "../SummaryForm";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe('SummaryForm', () => {
  it('should render unchecked checkbox and disabled button as initial state', () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i});
    const confirmButton = screen.getByRole('button', { name: /confirm order/i});

    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });

  it('should enable button on first checkbox click, and disable it on second click', async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i});
    const confirmButton = screen.getByRole('button', { name: /confirm order/i});

    await user.click(checkbox);
    expect(confirmButton).toBeEnabled();

    await user.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });

  it('displays the popover when hovered over', async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);

    // popover starts hidden
    // We use queryBy because we don't want an ERROR if it's not found, just null
    const hiddenPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(hiddenPopover).not.toBeInTheDocument();

    // popover appears on hover of checkbox label
    // We use getBy because we expect it to be there, otherwise it should throw an error
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    // popover disappears when we unhover
    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
  });
})