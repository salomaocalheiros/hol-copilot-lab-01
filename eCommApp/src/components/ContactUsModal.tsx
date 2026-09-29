import { FormEvent, useState } from 'react';

interface ContactUsModalProps {
    onClose: () => void;
}

const ContactUsModal = ({ onClose }: ContactUsModalProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
    };

    return (
        <div className="modal-backdrop">
            <section className="modal-content" role="dialog" aria-modal="true" aria-labelledby="contact-us-title">
                <button className="close-button" type="button" aria-label="Close Contact Us" onClick={onClose}>
                    &times;
                </button>
                {submitted ? (
                    <>
                        <h2 id="contact-us-title">Thank you for your message</h2>
                        <div className="checkout-modal-actions">
                            <button type="button" onClick={onClose}>Continue</button>
                        </div>
                    </>
                ) : (
                    <>
                        <h2 id="contact-us-title">Contact Us</h2>
                        <form className="contact-us-form" onSubmit={handleSubmit}>
                            <label htmlFor="contact-name">Name</label>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                            <label htmlFor="contact-email">Email address</label>
                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            <label htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                required
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </>
                )}
            </section>
        </div>
    );
};

export default ContactUsModal;
