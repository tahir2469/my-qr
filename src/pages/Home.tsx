import React, { useState } from 'react';
import Generator from '../components/Generator';
import Customizer from '../components/Customizer';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
    const [value, setValue] = useState('https://github.com');
    const [fgColor, setFgColor] = useState('#ffffff');
    const [bgColor, setBgColor] = useState('#0a0b1e');
    const [level, setLevel] = useState<'L' | 'M' | 'Q' | 'H'>('Q');
    const [cornerType, setCornerType] = useState<'square' | 'rounded' | 'dots'>('rounded');
    const [logo, setLogo] = useState<string>('');

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-extrabold mb-6"
                >
                    Generate <span className="gradient-text">QR Codes</span> <br />
                    with Precision.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted max-w-2xl mx-auto"
                >
                    Transform URLs and text into beautiful, stylized QR codes.
                    Fully customizable and ready for high-resolution download.
                </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Customizer
                        value={value}
                        setValue={setValue}
                        fgColor={fgColor}
                        setFgColor={setFgColor}
                        bgColor={bgColor}
                        setBgColor={setBgColor}
                        level={level}
                        setLevel={setLevel}
                        cornerType={cornerType}
                        setCornerType={setCornerType}
                        logo={logo}
                        setLogo={setLogo}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="sticky top-12"
                >
                    <Generator
                        value={value}
                        fgColor={fgColor}
                        bgColor={bgColor}
                        level={level}
                        cornerType={cornerType}
                        logo={logo}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
