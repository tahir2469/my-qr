import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Download } from 'lucide-react';

const About: React.FC = () => {
    const features = [
        {
            icon: <Zap className="text-accent-primary" />,
            title: "Instant Generation",
            description: "Fast real-time previews as you type your URL or text."
        },
        {
            icon: <ShieldCheck className="text-accent-secondary" />,
            title: "Privacy First",
            description: "Your QR codes are generated locally in your browser. No data leaves your machine."
        },
        {
            icon: <Download className="text-accent-primary" />,
            title: "High Quality",
            description: "Export QR codes in SVG or PNG formats suitable for print and digital use."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <h1 className="text-4xl font-bold mb-6">About <span className="gradient-text">QR Spark</span></h1>
                <p className="text-xl text-muted leading-relaxed">
                    QR Spark is a premium tool designed for creators and businesses who need more than just a basic QR code.
                    We provide a suite of customization options to ensure your QR code matches your brand identity perfectly.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass p-8"
                    >
                        <div className="mb-4">{f.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                        <p className="text-muted">{f.description}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="glass p-10 border-accent-primary/20"
            >
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted mb-6">
                    To provide the most elegant and user-friendly QR generation experience on the web.
                    We believe simplicity and high-end design can coexist.
                </p>
                <div className="h-px bg-white/10 w-full mb-6"></div>
                <p className="text-sm text-muted">
                    Hosted on GitHub Pages · Open Source · Free to use
                </p>
            </motion.div>
        </div>
    );
};

export default About;
