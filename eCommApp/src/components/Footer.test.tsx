import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Footer from './Footer';

describe('Footer contact form', () => {
    it('opens the form, clears submitted details, and shows a continue button', async () => {
        const user = userEvent.setup();
        render(<Footer />);

        await user.click(screen.getByRole('button', { name: 'Fale Conosco' }));
        await user.type(screen.getByLabelText('Nome'), 'Ana Silva');
        await user.type(screen.getByLabelText('E-mail'), 'ana@example.com');
        await user.type(screen.getByLabelText('Solicitação'), 'Preciso de ajuda');
        await user.click(screen.getByRole('button', { name: 'Enviar' }));

        expect(screen.getByRole('heading', { name: 'Obrigado pela sua mensagem.' })).toBeInTheDocument();
        expect(screen.queryByLabelText('Nome')).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Continuar' })).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Continuar' }));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
});
