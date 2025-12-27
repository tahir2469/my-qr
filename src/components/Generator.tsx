import React, { useRef, useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface GeneratorProps {
    value: string;
    fgColor: string;
    bgColor: string;
    level: 'L' | 'M' | 'Q' | 'H';
    cornerType: 'square' | 'rounded' | 'dots';
    logo?: string;
}

const Generator: React.FC<GeneratorProps> = ({ value, fgColor, bgColor, level, cornerType, logo }) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [qrData, setQrData] = useState<any>(null);

    const cornerStyle = cornerType === 'rounded' ? 'rounded-3xl' : cornerType === 'dots' ? 'rounded-[2.5rem]' : 'rounded-none';

    useEffect(() => {
        // Generate QR matrix data
        QRCode.create(value || 'https://qr-spark.com', {
            errorCorrectionLevel: level,
        });

        // Use the library to get the raw modules
        const qr = QRCode.create(value || 'https://qr-spark.com', {
            errorCorrectionLevel: level,
        });
        setQrData(qr.modules);
    }, [value, level]);

    const downloadQR = () => {
        if (!svgRef.current) return;
        const svgData = new XMLSerializer().serializeToString(svgRef.current);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = () => {
            canvas.width = 1000;
            canvas.height = 1000;
            ctx?.drawImage(img, 0, 0, 1000, 1000);
            const pngFile = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.download = `qr-spark-${Date.now()}.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    const renderModules = () => {
        if (!qrData) return null;
        const size = qrData.size;
        const data = qrData.data;
        const modules = [];

        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if (data[r * size + c]) {
                    // It's a dark module
                    const key = `${r}-${c}`;
                    if (cornerType === 'dots') {
                        modules.push(
                            <circle
                                key={key}
                                cx={c + 0.5}
                                cy={r + 0.5}
                                r={0.35} // Slightly smaller than 0.5 for nice separation
                                fill={fgColor}
                            />
                        );
                    } else {
                        const radius = cornerType === 'rounded' ? 0.25 : 0;
                        modules.push(
                            <rect
                                key={key}
                                x={c}
                                y={r}
                                width={1}
                                height={1}
                                rx={radius}
                                fill={fgColor}
                            />
                        );
                    }
                }
            }
        }
        return modules;
    };

    return (
        <div className="glass p-8 flex flex-col items-center">
            <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`mb-8 p-6 bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 ${cornerStyle}`}
            >
                {qrData && (
                    <svg
                        ref={svgRef}
                        viewBox={`0 0 ${qrData.size} ${qrData.size}`}
                        width={280}
                        height={280}
                        style={{ background: bgColor }}
                        shapeRendering={cornerType === 'dots' ? 'auto' : 'crispEdges'}
                    >
                        {/* Background */}
                        <rect width={qrData.size} height={qrData.size} fill={bgColor} />

                        {/* Modules */}
                        {renderModules()}

                        {/* Logo Overlay */}
                        {logo && (
                            <image
                                href={logo}
                                x={qrData.size * 0.38}
                                y={qrData.size * 0.38}
                                width={qrData.size * 0.24}
                                height={qrData.size * 0.24}
                                preserveAspectRatio="xMidYMid slice"
                            />
                        )}
                    </svg>
                )}
            </motion.div>

            <div className="w-full mb-4">
                <button
                    onClick={downloadQR}
                    className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg shadow-xl shadow-indigo-500/20"
                >
                    <Download size={22} />
                    Download PNG (High Res)
                </button>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-muted">
                <span className="px-3 py-1 glass rounded-full text-xs font-mono">
                    {1000}x{1000}px
                </span>
                <span className="px-3 py-1 glass rounded-full text-xs font-mono" title="Error Correction Level">
                    Level: {level}
                </span>
            </div>
        </div>
    );
};

export default Generator;
