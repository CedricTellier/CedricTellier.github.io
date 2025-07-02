import React, { useRef, useState, useEffect } from 'react';

const ContactForm: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hide, setHide] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

    // Ferme le formulaire si on clique en dehors, avec animation de slide up
    useEffect(() => {
        if (!open) return;
        const handleClick = (e: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(e.target as Node)) {
                setHide(true);
                setTimeout(() => {
                    setOpen(false);
                    setHide(false);
                }, 350);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [open]);

    // Envoi du formulaire (remplace par ton endpoint ou mailto si besoin)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        setError(null);
        setSent(false);

        const form = e.target as HTMLFormElement;
        const data = {
            subject: form.subject.value,
            email: form.email.value,
            message: form.message.value,
        };

        try {
            const res = await fetch('https://formspree.io/f/xwkgyqgk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setSent(true);
                form.reset();
                setHide(true);
                setTimeout(() => {
                    setOpen(false);
                    setHide(false);
                    setSent(false);
                }, 350);
            } else {
                setError("Erreur lors de l'envoi.");
            }
        } catch {
            setError("Erreur lors de l'envoi.");
        }
        setSending(false);
    };

    return (
        <>
            {/* Bouton flottant en haut à gauche */}
            <button
                aria-label="Contact"
                onClick={() => setOpen(true)}
                style={{
                    position: 'fixed',
                    top: 24,
                    left: 32,
                    zIndex: 210,
                    background: 'var(--navbar-bg, #fff)',
                    color: 'var(--icon-color, #18181b)',
                    border: '2px solid #8882',
                    borderRadius: 24,
                    padding: '8px 20px',
                    fontWeight: 700,
                    fontFamily: "'Press Start 2P', cursive, sans-serif",
                    fontSize: 16,
                    boxShadow: '0 2px 12px #0001',
                    cursor: 'pointer',
                    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
                }}
            >
                Contact
            </button>
            {/* Overlay et formulaire */}
            {open && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        zIndex: 209,
                        background: 'transparent',
                    }}
                >
                    <div
                        ref={formRef}
                        style={{
                            position: 'fixed',
                            top: 72,
                            left: 32,
                            background: 'var(--navbar-bg, #fff)',
                            color: 'var(--text-main, #18181b)',
                            borderRadius: 18,
                            boxShadow: '0 8px 32px #0003',
                            padding: 32,
                            minWidth: 320,
                            maxWidth: '90vw',
                            width: 400,
                            animation: `${hide ? 'slideUpContact' : 'slideDownContact'} 0.35s cubic-bezier(.22,1.5,.36,1)`,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 18,
                        }}
                    >
                        <button
                            aria-label="Fermer"
                            onClick={() => {
                                setHide(true);
                                setTimeout(() => {
                                    setOpen(false);
                                    setHide(false);
                                    setSent(false);
                                }, 350);
                            }}
                            style={{
                                position: 'absolute',
                                top: 12,
                                right: 16,
                                background: 'none',
                                border: 'none',
                                fontSize: 22,
                                color: 'var(--icon-color, #18181b)',
                                cursor: 'pointer',
                                opacity: 0.7,
                            }}
                        >✕</button>
                        <h2 style={{
                            fontFamily: "'Press Start 2P', cursive, sans-serif",
                            fontSize: 18,
                            marginBottom: 8,
                            textAlign: 'center',
                            letterSpacing: 1,
                        }}>Contactez-moi</h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            <label style={{ fontWeight: 600 }}>
                                Objet
                                <input
                                    name="subject"
                                    type="text"
                                    required
                                    style={{
                                        width: '100%',
                                        marginTop: 4,
                                        padding: '8px 10px',
                                        borderRadius: 8,
                                        border: '1.5px solid #bbb',
                                        background: 'var(--bg-main, #f3f4f6)',
                                        color: 'var(--text-main, #18181b)',
                                        fontSize: 15,
                                        fontFamily: 'inherit',
                                        outline: 'none',
                                        marginBottom: 2,
                                    }}
                                />
                            </label>
                            <label style={{ fontWeight: 600 }}>
                                Adresse mail
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    style={{
                                        width: '100%',
                                        marginTop: 4,
                                        padding: '8px 10px',
                                        borderRadius: 8,
                                        border: '1.5px solid #bbb',
                                        background: 'var(--bg-main, #f3f4f6)',
                                        color: 'var(--text-main, #18181b)',
                                        fontSize: 15,
                                        fontFamily: 'inherit',
                                        outline: 'none',
                                        marginBottom: 2,
                                    }}
                                />
                            </label>
                            <label style={{ fontWeight: 600 }}>
                                Description
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    style={{
                                        width: '100%',
                                        marginTop: 4,
                                        padding: '8px 10px',
                                        borderRadius: 8,
                                        border: '1.5px solid #bbb',
                                        background: 'var(--bg-main, #f3f4f6)',
                                        color: 'var(--text-main, #18181b)',
                                        fontSize: 15,
                                        fontFamily: 'inherit',
                                        outline: 'none',
                                        marginBottom: 2,
                                        resize: 'vertical'
                                    }}
                                />
                            </label>
                            <button
                                type="submit"
                                disabled={sending}
                                style={{
                                    marginTop: 8,
                                    padding: '10px 0',
                                    borderRadius: 8,
                                    border: 'none',
                                    background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)',
                                    color: '#fff',
                                    fontWeight: 700,
                                    fontSize: 16,
                                    fontFamily: "'Press Start 2P', cursive, sans-serif",
                                    cursor: sending ? 'not-allowed' : 'pointer',
                                    opacity: sending ? 0.7 : 1,
                                    transition: 'background 0.2s, opacity 0.2s'
                                }}
                            >
                                {sending ? "Envoi..." : "Envoyer"}
                            </button>
                            {sent && <div style={{ color: "#16a34a", fontWeight: 600, marginTop: 4 }}>Message envoyé !</div>}
                            {error && <div style={{ color: "#dc2626", fontWeight: 600, marginTop: 4 }}>{error}</div>}
                        </form>
                    </div>
                    <style>
                        {`
                        @keyframes slideDownContact {
                            from { opacity: 0; transform: translateY(-30px) scale(0.98);}
                            to { opacity: 1; transform: translateY(0) scale(1);}
                        }
                        @keyframes slideUpContact {
                            from { opacity: 1; transform: translateY(0) scale(1);}
                            to { opacity: 0; transform: translateY(-30px) scale(0.98);}
                        }
                        `}
                    </style>
                </div>
            )}
        </>
    );
};

export default ContactForm;
