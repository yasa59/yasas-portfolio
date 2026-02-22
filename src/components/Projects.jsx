import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

const projects = [
    {
        title: "Skin Type Detection & Recommendation System",
        short: "AI-powered real-time skincare analysis using deep learning.",
        description:
            "Engineered an AI-powered skincare analysis system detecting skin type and oiliness levels in real-time. Uses Python, OpenCV, Haar Cascade for face detection, VGG16 + Transfer Learning for 4-level classification, NumPy, and data augmentation. Deployed via Streamlit for live video analysis with personalized recommendations.",
        tags: ["Python", "OpenCV", "VGG16", "Transfer Learning", "Streamlit", "NumPy"],
        color: "#6c63ff",
        github: "https://github.com/yasa59",
        emoji: "🔬",
    },
    {
        title: "AI Helmet Detection & Traffic Violation Monitor",
        short: "Automated traffic enforcement with YOLO & OCR for license plates.",
        description:
            "Automated traffic enforcement solution monitoring live video streams for helmet law violations. Leverages Python, OpenCV, YOLO/SSD models for real-time offender detection, and OCR for license plate extraction. Modular design supports expansion to other traffic analytics including speeding and overtaking detection.",
        tags: ["Python", "YOLO", "SSD", "OpenCV", "OCR", "Deep Learning"],
        color: "#43e6fc",
        github: "https://github.com/yasa59",
        emoji: "🚦",
    },
    {
        title: "Smart IoT Marma Foot Therapy System",
        short: "MERN-stack IoT shoe automating traditional Marma therapy.",
        description:
            "Final Year Project: an IoT-enabled smart shoe automating Marma foot therapy via precision vibration motors. Full MERN stack (MongoDB, Express, React, Node.js) control interface with Tailwind CSS. Real-time therapy management with battery efficiency optimization. Published at 5th Student Symposium at KDU.",
        tags: ["MERN", "React", "Node.js", "MongoDB", "IoT", "Tailwind"],
        color: "#ff6584",
        github: "https://github.com/yasa59",
        emoji: "👟",
    },
    {
        title: "Fabric Roll Diameter & Barcode Reader",
        short: "Computer vision QC system for fabric roll measurement.",
        description:
            "Computer vision-based quality control system using Python and OpenCV to automate physical measurement and tracking of fabric rolls. Integrates ML algorithms for autonomous dimension verification and barcode capture. Transforms slow manual processes into high-speed, error-free workflows with intuitive data interface.",
        tags: ["Python", "OpenCV", "Machine Learning", "Barcode", "Computer Vision"],
        color: "#a78bfa",
        github: "https://github.com/yasa59",
        emoji: "🧵",
    },
    {
        title: "Gesture Recognition Smart Home",
        short: "Contactless home automation via hand gestures using MediaPipe.",
        description:
            "Contactless home automation controlling fans and lights using real-time hand gestures. Raspberry Pi for vision processing, Arduino for hardware actuation, OpenCV and MediaPipe for gesture translation. Recognizes gestures like 'thumbs up' and 'fist' into actionable commands via serial communication.",
        tags: ["Raspberry Pi", "Arduino", "OpenCV", "MediaPipe", "Python"],
        color: "#34d399",
        github: "https://github.com/yasa59",
        emoji: "🏠",
    },
    {
        title: "Water Level Detector",
        short: "Real-time reservoir monitoring with PIC16F887 microcontroller.",
        description:
            "Real-time water level monitoring using PIC16F887 microcontroller and HC-SR04 ultrasonic sensor. Firmware in MPLAB X IDE + XC8 Compiler calculates fluid distances and displays High/Mid/Low status on 16x2 LCD. Safety buzzer triggers on critical high-water conditions for reliable automated reservoir management.",
        tags: ["PIC16F887", "MPLAB X", "HC-SR04", "C", "Embedded Systems"],
        color: "#fbbf24",
        github: "https://github.com/yasa59",
        emoji: "💧",
    },
    {
        title: "ML/DL Mini Projects (Coursework)",
        short: "Collection of independently completed ML and Deep Learning projects.",
        description:
            "A curated collection of mini projects completed independently during university coursework, covering Machine Learning and Deep Learning approaches. Projects span classification, regression, neural networks, and data analysis tasks demonstrating broad AI/ML proficiency.",
        tags: ["Machine Learning", "Deep Learning", "Python", "TensorFlow", "Jupyter"],
        color: "#f97316",
        github: "https://github.com/yasa59",
        emoji: "🧠",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
    const [expanded, setExpanded] = useState(null);

    return (
        <section
            id="projects"
            style={{
                padding: "100px 24px",
                position: "relative",
                zIndex: 1,
                maxWidth: 1200,
                margin: "0 auto",
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: "center", marginBottom: 64 }}
            >
                <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: 8, letterSpacing: 2, textTransform: "uppercase", fontSize: "0.85rem" }}>
                    What I've Built
                </p>
                <h2 className="section-title underline-glow" style={{ display: "inline-block" }}>
                    Projects
                </h2>
            </motion.div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: 28,
                }}
            >
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card project-card"
                        style={{
                            padding: 0,
                            overflow: "hidden",
                            position: "relative",
                            cursor: "pointer",
                        }}
                        onClick={() => setExpanded(expanded === i ? null : i)}
                    >
                        {/* Top color bar */}
                        <div
                            style={{
                                height: 4,
                                background: `linear-gradient(90deg, ${project.color}, transparent)`,
                            }}
                        />

                        <div style={{ padding: "28px" }}>
                            {/* Emoji + title */}
                            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
                                <span
                                    style={{
                                        fontSize: "2.2rem",
                                        background: `${project.color}20`,
                                        width: 52,
                                        height: 52,
                                        borderRadius: 14,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                        border: `1px solid ${project.color}40`,
                                    }}
                                >
                                    {project.emoji}
                                </span>
                                <div style={{ flex: 1 }}>
                                    <h3
                                        style={{
                                            fontFamily: "Space Grotesk, sans-serif",
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            marginBottom: 6,
                                            lineHeight: 1.3,
                                            color: "var(--text-primary)",
                                        }}
                                    >
                                        {project.title}
                                    </h3>
                                    <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.5 }}>
                                        {project.short}
                                    </p>
                                </div>
                            </div>

                            {/* Tags */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            background: `${project.color}15`,
                                            border: `1px solid ${project.color}35`,
                                            borderRadius: 100,
                                            padding: "4px 12px",
                                            fontSize: "0.78rem",
                                            color: project.color,
                                            fontWeight: 500,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Expand button */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "0.82rem",
                                        color: project.color,
                                        fontWeight: 500,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 4,
                                    }}
                                >
                                    {expanded === i ? "Less" : "More"}{" "}
                                    {expanded === i ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                                </span>
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={(e) => e.stopPropagation()}
                                    style={{
                                        width: 34,
                                        height: 34,
                                        borderRadius: 8,
                                        background: `${project.color}15`,
                                        border: `1px solid ${project.color}40`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: project.color,
                                        textDecoration: "none",
                                    }}
                                >
                                    <FaGithub size={15} />
                                </motion.a>
                            </div>

                            {/* Expandable description */}
                            <AnimatePresence>
                                {expanded === i && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.35 }}
                                        style={{ overflow: "hidden" }}
                                    >
                                        <div
                                            style={{
                                                marginTop: 16,
                                                padding: "16px",
                                                background: `${project.color}08`,
                                                borderRadius: 12,
                                                border: `1px solid ${project.color}20`,
                                            }}
                                        >
                                            <p
                                                style={{
                                                    color: "var(--text-secondary)",
                                                    fontSize: "0.9rem",
                                                    lineHeight: 1.7,
                                                }}
                                            >
                                                {project.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
