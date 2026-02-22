import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer
            style={{
                padding: "40px 24px",
                position: "relative",
                zIndex: 1,
                borderTop: "1px solid rgba(108,99,255,0.15)",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "1.6rem",
                        fontWeight: 700,
                        background: "linear-gradient(135deg, #6c63ff, #43e6fc)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    YA.
                </motion.div>
                <div style={{ display: "flex", gap: 16 }}>
                    {[
                        { icon: <FaGithub />, href: "https://github.com/yasa59" },
                        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/yasas-amarasekara-ab8a15246" },
                    ].map(({ icon, href }, i) => (
                        <motion.a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, y: -3 }}
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: "1.2rem",
                                textDecoration: "none",
                                transition: "color 0.3s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#6c63ff")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                        >
                            {icon}
                        </motion.a>
                    ))}
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: 6 }}>
                    © {year} Yasas Amarasekara · Built with <FaHeart style={{ color: "#ff6584" }} /> React & Framer Motion
                </p>
            </div>
        </footer>
    );
}
