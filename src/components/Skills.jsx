import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Languages",
        color: "#6c63ff",
        skills: ["Python", "JavaScript", "Java", "C++", "SQL", "Dart"],
    },
    {
        title: "Frameworks & Stacks",
        color: "#43e6fc",
        skills: ["MERN Stack", "React", "Node.js", "Express", "Tailwind CSS"],
    },
    {
        title: "AI / CV",
        color: "#ff6584",
        skills: ["OpenCV", "TensorFlow", "VGG16", "YOLO", "MediaPipe", "NumPy"],
    },
    {
        title: "Tools & Platforms",
        color: "#a78bfa",
        skills: ["Git & GitHub", "JIRA", "Trello", "Postman", "Power BI", "Selenium", "Streamlit"],
    },
    {
        title: "IoT & Hardware",
        color: "#34d399",
        skills: ["Raspberry Pi", "Arduino", "PIC16F887", "MPLAB X IDE", "XC8 Compiler"],
    },
    {
        title: "Soft Skills",
        color: "#fbbf24",
        skills: ["Project Management", "Critical Thinking", "Teamwork", "Problem-Solving", "Time Management", "Creativity"],
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
    return (
        <section
            id="skills"
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
                    What I Work With
                </p>
                <h2 className="section-title underline-glow" style={{ display: "inline-block" }}>
                    Skills &amp; Tech
                </h2>
            </motion.div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: 24,
                }}
            >
                {skillCategories.map((cat, catIdx) => (
                    <motion.div
                        key={cat.title}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.1 }}
                        className="glass-card"
                        style={{ padding: "28px", position: "relative", overflow: "hidden" }}
                    >
                        {/* Glow accent top */}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: 3,
                                background: `linear-gradient(90deg, ${cat.color}, transparent)`,
                                borderRadius: "20px 20px 0 0",
                            }}
                        />

                        <h3
                            style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontSize: "1rem",
                                fontWeight: 700,
                                color: cat.color,
                                marginBottom: 20,
                                textTransform: "uppercase",
                                letterSpacing: 1,
                            }}
                        >
                            {cat.title}
                        </h3>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                            {cat.skills.map((skill, skillIdx) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: catIdx * 0.08 + skillIdx * 0.05 }}
                                    whileHover={{
                                        scale: 1.08,
                                        boxShadow: `0 0 18px ${cat.color}55`,
                                        borderColor: cat.color,
                                    }}
                                    style={{
                                        background: `${cat.color}15`,
                                        border: `1px solid ${cat.color}40`,
                                        borderRadius: 100,
                                        padding: "6px 16px",
                                        fontSize: "0.85rem",
                                        fontWeight: 500,
                                        color: "var(--text-primary)",
                                        cursor: "default",
                                        transition: "all 0.3s",
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
