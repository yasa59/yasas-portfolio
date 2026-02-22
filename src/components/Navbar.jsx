import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    padding: "16px 40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: scrolled
                        ? "rgba(5, 5, 16, 0.85)"
                        : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    borderBottom: scrolled
                        ? "1px solid rgba(108,99,255,0.15)"
                        : "none",
                    transition: "all 0.4s ease",
                }}
            >
                {/* Logo */}
                <motion.a
                    href="#hero"
                    whileHover={{ scale: 1.05 }}
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.4rem",
                        textDecoration: "none",
                        background:
                            "linear-gradient(135deg, #6c63ff, #43e6fc)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    YA.
                </motion.a>

                {/* Desktop nav */}
                <div
                    style={{
                        display: "flex",
                        gap: "32px",
                        alignItems: "center",
                    }}
                    className="hidden-mobile"
                >
                    {navItems.map((item) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            className="nav-link"
                            whileHover={{ y: -2 }}
                            style={{ textDecoration: "none", fontSize: "0.95rem" }}
                        >
                            {item.label}
                        </motion.a>
                    ))}
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="glow-btn"
                        style={{
                            padding: "10px 24px",
                            textDecoration: "none",
                            fontSize: "0.9rem",
                            display: "inline-block",
                        }}
                    >
                        <span>Let's Talk</span>
                    </motion.a>
                </div>

                {/* Mobile hamburger */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        background: "none",
                        border: "none",
                        color: "var(--text-primary)",
                        fontSize: "1.4rem",
                        cursor: "pointer",
                        display: "none",
                    }}
                    className="show-mobile"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </motion.button>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 999,
                            background: "rgba(5,5,16,0.97)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "32px",
                        }}
                    >
                        {navItems.map((item, i) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    textDecoration: "none",
                                    fontSize: "1.8rem",
                                    fontWeight: 600,
                                    color: "var(--text-primary)",
                                }}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
        </>
    );
}
