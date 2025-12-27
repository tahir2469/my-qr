import React from 'react';
import { Type, Palette, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

interface CustomizerProps {
    value: string;
    setValue: (v: string) => void;
    fgColor: string;
    setFgColor: (c: string) => void;
    bgColor: string;
    setBgColor: (c: string) => void;
    level: 'L' | 'M' | 'Q' | 'H';
    setLevel: (l: 'L' | 'M' | 'Q' | 'H') => void;
    cornerType: 'square' | 'rounded' | 'dots';
    setCornerType: (t: 'square' | 'rounded' | 'dots') => void;
    logo: string;
    setLogo: (l: string) => void;
}



const Customizer: React.FC<CustomizerProps> = ({
    value, setValue, fgColor, setFgColor, bgColor, setBgColor, level, setLevel, cornerType, setCornerType, logo, setLogo
}) => {
    return (
        <div className="space-y-8 pb-12">
            {/* Input Section */}
            <div
                className="glass p-8 mb-10 overflow-hidden relative"
            >
                <div className="flex items-center gap-2 mb-6 text-accent-primary relative z-10">
                    <Type size={20} />
                    <h3 className="font-bold uppercase tracking-wider text-sm">Input Content</h3>
                </div>
                <div className="relative z-10">
                    <textarea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Enter URL or text here..."
                        className="input-glass h-32 resize-none focus:ring-2 ring-accent-primary/50 transition-all"
                    />
                </div>
            </div>

            {/* Colors Section */}
            <div
                className="glass p-8 mb-10 relative overflow-hidden"
            >
                <div className="flex items-center gap-2 mb-6 text-accent-secondary relative z-10">
                    <Palette size={20} />
                    <h3 className="font-bold uppercase tracking-wider text-sm">Colors</h3>
                </div>
                <div className="grid grid-cols-2 gap-6 relative z-10">
                    <div className="space-y-3 cursor-pointer group">
                        <label className="text-sm text-muted group-hover:text-white transition-colors">Foreground</label>
                        <div className="flex gap-3 items-center bg-white/5 p-3 rounded-full border border-white/5 group-hover:border-white/10 transition-colors">
                            <input
                                type="color"
                                value={fgColor}
                                onChange={(e) => setFgColor(e.target.value)}
                                className="w-8 h-8 rounded-full cursor-pointer bg-transparent border-none"
                            />
                            <span className="text-xs font-mono uppercase text-muted group-hover:text-white transition-colors">{fgColor}</span>
                        </div>
                    </div>
                    <div className="space-y-3 cursor-pointer group">
                        <label className="text-sm text-muted group-hover:text-white transition-colors">Background</label>
                        <div className="flex gap-3 items-center bg-white/5 p-3 rounded-full border border-white/5 group-hover:border-white/10 transition-colors">
                            <input
                                type="color"
                                value={bgColor}
                                onChange={(e) => setBgColor(e.target.value)}
                                className="w-8 h-8 rounded-full cursor-pointer bg-transparent border-none"
                            />
                            <span className="text-xs font-mono uppercase text-muted group-hover:text-white transition-colors">{bgColor}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Style Section */}
            <div
                className="glass p-8 mb-10 relative overflow-hidden"
            >
                <div className="flex items-center gap-2 mb-8 text-accent-primary relative z-10">
                    <Layout size={20} />
                    <h3 className="font-bold uppercase tracking-wider text-sm">Design & Precision</h3>
                </div>

                <div className="space-y-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <label className="text-sm font-semibold text-muted block">Error Correction</label>
                            <div className="flex gap-2 p-1 glass rounded-xl">
                                {(['L', 'M', 'Q', 'H'] as const).map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => setLevel(l)}
                                        className="relative flex-1 py-3 rounded-xl text-sm font-medium transition-all z-0 border border-transparent hover:border-white/10"
                                    >
                                        {level === l && (
                                            <motion.div
                                                layoutId="level-indicator"
                                                className="absolute inset-0 bg-white/10 rounded-xl shadow-lg border border-white/10"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className={`relative z-10 ${level === l ? 'text-white font-bold' : 'text-muted hover:text-white'}`}>
                                            {l}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-sm font-semibold text-muted block">Corner Styles</label>
                            <div className="flex gap-2 p-1 glass rounded-xl">
                                {(['square', 'rounded', 'dots'] as const).map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setCornerType(t)}
                                        className={`relative flex-1 py-3 text-sm capitalize font-medium transition-all z-0 border border-transparent hover:border-white/10 ${t === 'square' ? 'rounded-none' : t === 'rounded' ? 'rounded-lg' : 'rounded-full'}`}
                                    >
                                        {cornerType === t && (
                                            <motion.div
                                                layoutId="corner-indicator"
                                                className={`absolute inset-0 bg-white/10 shadow-lg border border-white/10 ${t === 'square' ? 'rounded-none' : t === 'rounded' ? 'rounded-lg' : 'rounded-full'}`}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className={`relative z-10 ${cornerType === t ? 'text-white font-bold' : 'text-muted hover:text-white'}`}>
                                            {t === 'dots' ? 'Circular' : t}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                        <label className="text-sm font-semibold text-muted block mb-4">Center Logo</label>
                        <div className="flex items-center gap-6">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => setLogo(reader.result as string);
                                        reader.readAsDataURL(file);
                                    }
                                }}
                                className="hidden"
                                id="logo-upload"
                            />

                            <div className="flex-1 flex items-center gap-4">
                                <label
                                    htmlFor="logo-upload"
                                    className="px-6 py-3 cursor-pointer hover:bg-white/10 transition-all text-sm font-medium flex items-center gap-2 group border border-white/10 rounded-xl"
                                >
                                    Choose File
                                </label>

                                {logo && (
                                    <button
                                        onClick={() => setLogo('')}
                                        className="px-4 py-2 text-sm text-red-400 hover:text-red-300 transition-colors"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>

                            {logo && (
                                <div className="p-2 glass rounded-xl">
                                    <img src={logo} alt="Logo" className="w-16 h-16 rounded-lg object-contain" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customizer;
