import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Header from './Header';

describe('Header Contact Us modal', () => {
    it('opens the contact form and displays confirmation after submission', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByRole('button', { name: 'Contact Us' }));

        const dialog = screen.getByRole('dialog', { name: 'Contact Us' });
        expect(dialog).toBeInTheDocument();

        fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Alex Example' } });
        fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'alex@example.com' } });
        fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello' } });
        fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

        expect(screen.getByRole('heading', { name: 'Thank you for your message' })).toBeInTheDocument();
        expect(screen.queryByLabelText('Name')).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: 'Continue' }));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
});
