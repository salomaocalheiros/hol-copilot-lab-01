import { useState } from 'react';

const Footer = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [request, setRequest] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setName('');
        setEmail('');
        setRequest('');
        setIsSubmitted(true);
    };

    const closeContact = () => {
        setIsContactOpen(false);
        setIsSubmitted(false);
    };

    return (
        <footer className="app-footer">
            <p>&copy; 2025 The Daily Harvest. All rights reserved.</p>
            <button type="button" onClick={() => setIsContactOpen(true)}>Fale Conosco</button>
            {isContactOpen && (
                <div className="modal-backdrop">
                    <section className="modal-content contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title">
                        {isSubmitted ? (
                            <>
                                <h2 id="contact-title">Obrigado pela sua mensagem.</h2>
                                <button type="button" onClick={closeContact}>Continuar</button>
                            </>
                        ) : (
                            <>
                                <button type="button" className="close-button" aria-label="Fechar" onClick={closeContact}>×</button>
                                <h2 id="contact-title">Fale Conosco</h2>
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <label htmlFor="contact-name">Nome</label>
                                    <input id="contact-name" name="name" value={name} onChange={event => setName(event.target.value)} required />
                                    <label htmlFor="contact-email">E-mail</label>
                                    <input id="contact-email" name="email" type="email" value={email} onChange={event => setEmail(event.target.value)} required />
                                    <label htmlFor="contact-request">Solicitação</label>
                                    <textarea id="contact-request" name="request" value={request} onChange={event => setRequest(event.target.value)} required />
                                    <button type="submit">Enviar</button>
                                </form>
                            </>
                        )}
                    </section>
                </div>
            )}
        </footer>
    );
};

export default Footer;
