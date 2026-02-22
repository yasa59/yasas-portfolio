import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane,
} from "react-icons/fa";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState("idle"); // idle | sending | done | error
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        // Using EmailJS - replace service/template IDs with your own
        try {
            await emailjs.sendForm(
                "service_teooskf",     // 👈 replace
                "template_7n3uun9",    // 👈 replace
                formRef.current,
                "p6zgvwmZ7WVNcclqn"      // 👈 replace
            );
            setStatus("done");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <section
            id="contact"
            style={{ padding: "100px 24px 60px", position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}
        >
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ textAlign: "center", marginBottom: 64 }}
            >
                <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: 8, letterSpacing: 2, textTransform: "uppercase", fontSize: "0.85rem" }}>
                    Get In Touch
                </p>
                <h2 className="section-title underline-glow" style={{ display: "inline-block" }}>
                    Contact Me
                </h2>
                <p style={{ color: "var(--text-secondary)", marginTop: 16, maxWidth: 500, margin: "16px auto 0" }}>
                    I'm open to full-time roles, internships, freelance projects, and collaboration. Let's build something great!
                </p>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 40 }}>
                {/* Info panel */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className="glass-card" style={{ padding: "32px", marginBottom: 20 }}>
                        <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: 24 }}>
                            Contact Info
                        </h3>
                        {[
                            { icon: <FaEnvelope />, label: "Email", value: "yasasamarasekara0@gmail.com", href: "mailto:yasasamarasekara0@gmail.com" },
                            { icon: <FaPhone />, label: "Phone", value: "+94 764 742 106", href: "tel:+94764742106" },
                            { icon: <FaMapMarkerAlt />, label: "Location", value: "Rathmalana, Sri Lanka" },
                        ].map(({ icon, label, value, href }) => (
                            <div key={label} style={{ display: "flex", gap: 14, marginBottom: 20, alignItems: "flex-start" }}>
                                <span
                                    style={{
                                        color: "var(--accent-primary)",
                                        fontSize: "1rem",
                                        background: "rgba(108,99,255,0.12)",
                                        width: 38,
                                        height: 38,
                                        borderRadius: 10,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    {icon}
                                </span>
                                <div>
                                    <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginBottom: 2 }}>{label}</div>
                                    {href ? (
                                        <a href={href} style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>
                                            {value}
                                        </a>
                                    ) : (
                                        <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>{value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="glass-card" style={{ padding: "24px" }}>
                        <h4 style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: 16, color: "var(--text-secondary)" }}>Find me on</h4>
                        <div style={{ display: "flex", gap: 12 }}>
                            {[
                                { icon: <FaGithub />, href: "https://github.com/yasa59", label: "GitHub" },
                                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/yasas-amarasekara-ab8a15246", label: "LinkedIn" },
                            ].map(({ icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    style={{
                                        flex: 1,
                                        padding: "12px",
                                        background: "rgba(108,99,255,0.1)",
                                        border: "1px solid rgba(108,99,255,0.2)",
                                        borderRadius: 12,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 8,
                                        color: "var(--text-secondary)",
                                        textDecoration: "none",
                                        fontSize: "0.85rem",
                                        transition: "all 0.3s",
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--accent-primary)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "rgba(108,99,255,0.2)"; }}
                                >
                                    {icon} {label}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="glass-card"
                    style={{ padding: "36px" }}
                >
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                            <div>
                                <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>Name</label>
                                <input
                                    className="input-glow"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Yasas Amarasekara"
                                    required
                                />
                            </div>
                            <div>
                                <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>Email</label>
                                <input
                                    className="input-glow"
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>
                        <div style={{ marginBottom: 16 }}>
                            <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>Subject</label>
                            <input
                                className="input-glow"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="Project collaboration / Job opportunity..."
                                required
                            />
                        </div>
                        <div style={{ marginBottom: 24 }}>
                            <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>Message</label>
                            <textarea
                                className="input-glow"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Hi Yasas, I'd love to..."
                                rows={6}
                                required
                                style={{ resize: "vertical" }}
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={status === "sending"}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="glow-btn"
                            style={{
                                width: "100%",
                                padding: "16px",
                                fontSize: "1rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 8,
                                opacity: status === "sending" ? 0.7 : 1,
                            }}
                        >
                            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                {status === "sending" ? "Sending..." : status === "done" ? "Message Sent! ✅" : (
                                    <><FaPaperPlane /> Send Message</>
                                )}
                            </span>
                        </motion.button>

                        {status === "error" && (
                            <p style={{ color: "#ff6584", textAlign: "center", marginTop: 12, fontSize: "0.88rem" }}>
                                Something went wrong. Please email me directly.
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>

            <style>{`
        @media(max-width:768px) {
          #contact > div > div:first-child, #contact > div > div:last-child { grid-column: 1 / -1 !important; }
          #contact > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
