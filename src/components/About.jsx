import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const timeline = [
    {
        type: "work",
        icon: <FaBriefcase />,
        color: "#6c63ff",
        title: "Project Management Intern",
        org: "Bank of Ceylon HQ",
        period: "Jul 2025 – Dec 2025",
        desc: "Led UAT testing for Corporate Cash Management Solution (CCMS). Designed test cases in Excel, managed task tracking with Jira & Trello, coordinated with supervisors to meet strict banking standards.",
    },
    {
        type: "edu",
        icon: <FaUniversity />,
        color: "#43e6fc",
        title: "BSc (Hons) Computer Engineering",
        org: "General Sir John Kotelawala Defence University",
        period: "Jan 2022 – 2026",
        desc: "Undergraduate degree focusing on software engineering, IoT systems, AI/ML, and computer vision.",
    },
    {
        type: "edu",
        icon: <FaUniversity />,
        color: "#ff6584",
        title: "GCE A/Ls & O/Ls",
        org: "Kingswood College, Kandy",
        period: "Jan 2006 – 2019",
        desc: "Completed O/Ls with 5 A's, 1B, 3C's. A/Ls in Physics, Combined Mathematics & Chemistry.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            style={{
                padding: "100px 24px",
                position: "relative",
                zIndex: 1,
                maxWidth: 1100,
                margin: "0 auto",
            }}
        >
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ textAlign: "center", marginBottom: 64 }}
            >
                <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: 8, letterSpacing: 2, textTransform: "uppercase", fontSize: "0.85rem" }}>
                    Get To Know Me
                </p>
                <h2 className="section-title underline-glow" style={{ display: "inline-block" }}>
                    About Me
                </h2>
            </motion.div>

            {/* Bio card */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-card"
                style={{ padding: "40px", marginBottom: 60, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}
            >
                <div>
                    <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: 16 }}>
                        Who I Am
                    </h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 16 }}>
                        A Computer Engineering undergraduate at General Sir John Kotelawala Defence University
                        with hands-on experience in software, AI/ML, and IoT-based projects. Passionate about
                        bridging hardware with software to create impactful solutions.
                    </p>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                        Experienced in requirement gathering, task tracking, stakeholder communication, and
                        documentation. Comfortable leading cross-functional teams and managing full project
                        lifecycles from planning to delivery.
                    </p>
                </div>
                <div>
                    <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: 16 }}>
                        Quick Facts
                    </h3>
                    {[
                        { label: "Location", value: "Rathmalana, Sri Lanka", icon: <FaMapMarkerAlt /> },
                        { label: "Email", value: "yasasamarasekara0@gmail.com" },
                        { label: "Phone", value: "+94 764 742 106" },
                        { label: "University", value: "KDU, Sri Lanka" },
                        { label: "Status", value: "Seeking PM / Coordinator roles" },
                    ].map(({ label, value, icon }) => (
                        <div key={label} style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
                            <span style={{ color: "var(--accent-primary)", minWidth: 20, marginTop: 2 }}>{icon || "→"}</span>
                            <div>
                                <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem", display: "block" }}>{label}</span>
                                <span style={{ fontWeight: 500, fontSize: "0.95rem" }}>{value}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <style>{`@media(max-width:768px){ .about-grid { grid-template-columns: 1fr !important; } }`}</style>
            </motion.div>

            {/* Timeline */}
            <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: 40, textAlign: "center" }}
            >
                Experience &amp; Education
            </motion.h3>

            <div style={{ position: "relative", paddingLeft: 50 }}>
                <div className="timeline-line" />
                {timeline.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        style={{ marginBottom: 40, position: "relative" }}
                    >
                        {/* Dot */}
                        <div
                            style={{
                                position: "absolute",
                                left: -38,
                                top: 4,
                                width: 36,
                                height: 36,
                                borderRadius: "50%",
                                background: `rgba(${item.color === "#6c63ff" ? "108,99,255" : item.color === "#43e6fc" ? "67,230,252" : "255,101,132"},0.15)`,
                                border: `2px solid ${item.color}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: item.color,
                                fontSize: "0.9rem",
                                boxShadow: `0 0 15px ${item.color}40`,
                            }}
                        >
                            {item.icon}
                        </div>
                        <div className="glass-card" style={{ padding: "24px 28px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                                <h4 style={{ fontWeight: 700, fontSize: "1.05rem" }}>{item.title}</h4>
                                <span style={{ color: "var(--accent-primary)", fontSize: "0.85rem", fontWeight: 500 }}>{item.period}</span>
                            </div>
                            <p style={{ color: item.color, fontWeight: 500, marginBottom: 8, fontSize: "0.9rem" }}>{item.org}</p>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.92rem" }}>{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
