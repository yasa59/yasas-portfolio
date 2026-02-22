import React from "react";
import { motion } from "framer-motion";
import {
    FaTrophy, FaMedal, FaUsers, FaRobot, FaCertificate, FaBookOpen, FaFlask
} from "react-icons/fa";

const awards = [
    {
        icon: <FaTrophy />,
        color: "#fbbf24",
        title: "Best Use of Technology Award",
        org: "DATA ODYSSEY 2024 – Inter University Exhibition",
        year: "2024",
    },
    {
        icon: <FaMedal />,
        color: "#43e6fc",
        title: "1st Place – Wushu Championship U85–90kg",
        org: "Annual Inter Faculty Wushu Championship (Men's)",
        year: "2024 & 2025",
    },
];

const volunteering = [
    { role: "Head of Volunteer Engagement", org: "IEEE Computer Society of KDU", icon: <FaUsers /> },
    { role: "Public Committee Member", org: "IEEE Computer Society of KDU", icon: <FaUsers /> },
    { role: "Public Relations", org: "BCS Student Chapter KDU", icon: <FaUsers /> },
    { role: "Member", org: "Robotics and Innovation Club KDU", icon: <FaRobot /> },
];

const certs = [
    "Introduction to Cybersecurity – Cisco Networking Academy",
    "Introduction to Programming Using Python",
    "Postman API – Qualifications Board",
    "IT Essentials – Cisco Networking Academy",
    "Introduction to Networks – Cisco Networking Academy",
    "Fundamentals Student Expert – Canvas Credentials",
];

const publications = [
    {
        title: "Comprehensive Research on Developing a Smart IoT-Based Marma Foot Therapy Shoe",
        venue: "5th Student Symposium – General Sir John Kotelawala Defence University",
        date: "Feb 6, 2025",
        icon: <FaFlask />,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Achievements() {
    return (
        <section
            id="achievements"
            style={{ padding: "100px 24px", position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}
        >
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ textAlign: "center", marginBottom: 64 }}
            >
                <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: 8, letterSpacing: 2, textTransform: "uppercase", fontSize: "0.85rem" }}>
                    Recognition & Involvement
                </p>
                <h2 className="section-title underline-glow" style={{ display: "inline-block" }}>
                    Achievements
                </h2>
            </motion.div>

            {/* Awards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 48 }}>
                {awards.map((award, i) => (
                    <motion.div
                        key={award.title}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="achievement-badge"
                        style={{ padding: "28px", display: "flex", gap: 16, alignItems: "flex-start" }}
                    >
                        <span
                            style={{
                                fontSize: "1.6rem",
                                color: award.color,
                                background: `${award.color}18`,
                                width: 48,
                                height: 48,
                                borderRadius: 12,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                boxShadow: `0 0 15px ${award.color}40`,
                            }}
                        >
                            {award.icon}
                        </span>
                        <div>
                            <div style={{ color: award.color, fontSize: "0.8rem", fontWeight: 600, marginBottom: 4 }}>{award.year}</div>
                            <h4 style={{ fontWeight: 700, marginBottom: 4, fontSize: "0.95rem", lineHeight: 1.3 }}>{award.title}</h4>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>{award.org}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Volunteering */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-card"
                style={{ padding: "32px", marginBottom: 36 }}
            >
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: 24, color: "var(--accent-tertiary)" }}>
                    🤝 Volunteering Experience
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                    {volunteering.map((v) => (
                        <div
                            key={v.role}
                            style={{
                                background: "rgba(108,99,255,0.07)",
                                borderRadius: 12,
                                padding: "16px",
                                border: "1px solid rgba(108,99,255,0.15)",
                                display: "flex",
                                gap: 10,
                                alignItems: "flex-start",
                            }}
                        >
                            <span style={{ color: "var(--accent-primary)", marginTop: 2 }}>{v.icon}</span>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: "0.88rem", marginBottom: 3 }}>{v.role}</div>
                                <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>{v.org}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-card"
                style={{ padding: "32px", marginBottom: 36 }}
            >
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: 24, color: "#a78bfa" }}>
                    🏅 Certifications
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 12 }}>
                    {certs.map((cert) => (
                        <div
                            key={cert}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                padding: "12px 16px",
                                background: "rgba(167,139,250,0.07)",
                                borderRadius: 10,
                                border: "1px solid rgba(167,139,250,0.18)",
                            }}
                        >
                            <FaCertificate style={{ color: "#a78bfa", flexShrink: 0 }} />
                            <span style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>{cert}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Publication */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-card"
                style={{ padding: "32px" }}
            >
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: 24, color: "#34d399" }}>
                    📄 Publications
                </h3>
                {publications.map((pub) => (
                    <div
                        key={pub.title}
                        style={{
                            display: "flex",
                            gap: 16,
                            padding: "20px",
                            background: "rgba(52,211,153,0.07)",
                            borderRadius: 12,
                            border: "1px solid rgba(52,211,153,0.2)",
                        }}
                    >
                        <span style={{ color: "#34d399", fontSize: "1.5rem", marginTop: 2, flexShrink: 0 }}>{pub.icon}</span>
                        <div>
                            <h4 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 6, lineHeight: 1.4 }}>{pub.title}</h4>
                            <p style={{ color: "#34d399", fontSize: "0.85rem", marginBottom: 3 }}>{pub.venue}</p>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem" }}>{pub.date}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
