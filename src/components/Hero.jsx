import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa";

const roles = [
    "Project Manager",
    "Animator",
    "Web Developer",
    "Computer Engineer",
    "IoT Innovator",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let timeout;
        const current = roles[roleIndex];
        if (typing) {
            if (displayed.length < current.length) {
                timeout = setTimeout(
                    () => setDisplayed(current.slice(0, displayed.length + 1)),
                    70
                );
            } else {
                timeout = setTimeout(() => setTyping(false), 1800);
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(
                    () => setDisplayed(displayed.slice(0, -1)),
                    35
                );
            } else {
                setRoleIndex((prev) => (prev + 1) % roles.length);
                setTyping(true);
            }
        }
        return () => clearTimeout(timeout);
    }, [displayed, typing, roleIndex]);

    return (
        <section
            id="hero"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: 1,
                padding: "0 24px",
                textAlign: "center",
            }}
        >
            {/* Background orbs */}
            <div
                className="bg-orb"
                style={{
                    width: 500,
                    height: 500,
                    background: "radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)",
                    top: "10%",
                    left: "10%",
                    animation: "float 8s ease-in-out infinite",
                }}
            />
            <div
                className="bg-orb"
                style={{
                    width: 400,
                    height: 400,
                    background: "radial-gradient(circle, rgba(67,230,252,0.1) 0%, transparent 70%)",
                    bottom: "15%",
                    right: "10%",
                    animation: "float 10s ease-in-out infinite reverse",
                }}
            />

            {/* Status badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(108,99,255,0.12)",
                    border: "1px solid rgba(108,99,255,0.3)",
                    borderRadius: 100,
                    padding: "8px 20px",
                    marginBottom: 32,
                    fontSize: "0.85rem",
                    color: "#a5a0ff",
                }}
            >
                <span
                    style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#43e6fc",
                        boxShadow: "0 0 8px #43e6fc",
                        animation: "pulse-glow 2s ease-in-out infinite",
                        display: "inline-block",
                    }}
                />
                Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    marginBottom: 16,
                }}
            >
                Hi, I'm{" "}
                <span className="text-gradient">Yasas Amarasekara</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                    fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                    color: "var(--text-secondary)",
                    marginBottom: 24,
                    height: "2.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                }}
            >
                <span style={{ color: "var(--accent-tertiary)", fontWeight: 500 }}>
                    {displayed}
                </span>
                <span
                    style={{
                        display: "inline-block",
                        width: 3,
                        height: "1.4em",
                        background: "var(--accent-primary)",
                        borderRadius: 2,
                        animation: "pulse-glow 0.8s step-end infinite",
                    }}
                />
            </motion.div>

            {/* Bio */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{
                    maxWidth: 600,
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: 40,
                    fontSize: "1.05rem",
                }}
            >
                Computer Engineering Undergraduate at KDU · Building AI, IoT &amp; Web
                solutions · IEEE Volunteer · Wushu Champion 🏆
            </motion.p>

            {/* CTA buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}
            >
                <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="glow-btn"
                    style={{ padding: "14px 36px", textDecoration: "none", fontSize: "1rem" }}
                >
                    <span>View My Work</span>
                </motion.a>
                <motion.a
                    href="/cv.pdf"
                    download
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                        padding: "14px 36px",
                        textDecoration: "none",
                        fontSize: "1rem",
                        border: "1px solid rgba(108,99,255,0.4)",
                        borderRadius: 12,
                        color: "var(--text-primary)",
                        fontWeight: 600,
                        transition: "all 0.3s",
                        backdropFilter: "blur(8px)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(108,99,255,0.1)";
                        e.currentTarget.style.borderColor = "var(--accent-primary)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.borderColor = "rgba(108,99,255,0.4)";
                    }}
                >
                    Download CV
                </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                style={{ display: "flex", gap: 20, marginBottom: 60 }}
            >
                {[
                    { icon: <FaGithub />, href: "https://github.com/yasa59", label: "GitHub" },
                    {
                        icon: <FaLinkedin />,
                        href: "https://www.linkedin.com/in/yasas-amarasekara-ab8a15246",
                        label: "LinkedIn",
                    },
                ].map(({ icon, href, label }) => (
                    <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -4 }}
                        style={{
                            width: 48,
                            height: 48,
                            borderRadius: 12,
                            background: "rgba(108,99,255,0.1)",
                            border: "1px solid rgba(108,99,255,0.25)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--text-secondary)",
                            fontSize: "1.3rem",
                            textDecoration: "none",
                            transition: "color 0.3s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                        {icon}
                    </motion.a>
                ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                style={{ color: "var(--text-secondary)", fontSize: "1.4rem" }}
            >
                <FaChevronDown />
            </motion.div>
        </section>
    );
}
