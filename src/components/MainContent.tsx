import { useState } from 'react';
import './MainContent.css';

const STYLE_OPTIONS = [
    { title: "Minimalist / Clean", desc: "Light spacing, simple typography, neutral colors." },
    { title: "Modern / Contemporary", desc: "Flat shapes, bold color blocks, geometric layouts." },
    { title: "Neumorphism (Soft UI)", desc: "Soft shadows, extruded surfaces, subtle gradients." },
    { title: "Skeuomorphic", desc: "Real-world textures or objects." },
    { title: "Flat Design", desc: "No shadows, no depth, crisp edges, bright color palettes." },
    { title: "Material Design", desc: "Shadows, layers, floating elements, motion principles." },
    { title: "Glassmorphism", desc: "Frosted-glass blurs, transparency, glowing outlines." },
    { title: "Brutalism", desc: "Harsh contrasts, oversized typography, intentionally “raw” appearance." },
    { title: "Cyberpunk / Futuristic", desc: "Neon colors, dark backgrounds, glitch effects, holographic textures." },
    { title: "Retro / Vintage Web", desc: "Grainy textures, retro fonts, early web inspirations." },
    { title: "Corporate / Enterprise", desc: "Conservative color palette, structured layouts, safe typography." },
    { title: "Editorial / Magazine", desc: "Heavy typography, strong grid systems, image-driven layouts." },
    { title: "Aesthetic / Pastel", desc: "Soft colors, rounded shapes, dreamy vibes." },
    { title: "Dark Mode UI", desc: "High contrast, dark color schemes, glowing accents." },
    { title: "Dashboard / Data-Heavy Design", desc: "Modular grids, charts, tables, KPI widgets, efficient spacing." },
    { title: "E-commerce UI Style", desc: "Product-focused layouts, filters, modals, shopping flows." },
    { title: "Luxury / Premium", desc: "Black & gold, serif fonts, elegant spacing, high-end imagery." },
    { title: "Playful / Youthful", desc: "Bright colors, bouncy animations, illustrated characters." },
    { title: "AI / Tech UI", desc: "Organic gradients, floating shapes, fractal patterns, micro-interactions." },
    { title: "Accessible / Inclusive Design", desc: "Strong contrast, readable fonts, assistive-friendly spacing." },
];

const MainContent = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleStyleSelect = (styleTitle: string) => {
        setSelectedStyle(styleTitle);
        setIsDropdownOpen(false);
    };

    return (
        <main className="main-content">
            <header className="header">
                <div className="user-profile">
                    <div className="avatar"></div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </header>

            <div className="content-center">
                <h1 className="greeting">
                    Hello, <span>Creator</span>
                </h1>
                <p className="subtext">
                    I can help you generate React interactions, animations, and responsive layouts.
                </p>

                <div className="prompt-container">
                    <div className="prompt-box">
                        <div className="prompt-header">
                            <textarea
                                className="prompt-textarea"
                                placeholder="Describe the UI or interaction element you need..."
                                rows={1}
                            />
                            <div className="style-select-container">
                                <button className="style-select-btn" onClick={toggleDropdown}>
                                    {selectedStyle || "Select Style"}
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>

                                {isDropdownOpen && (
                                    <div className="style-dropdown-menu">
                                        {STYLE_OPTIONS.map((option, index) => (
                                            <div
                                                key={index}
                                                className="style-dropdown-item"
                                                onClick={() => handleStyleSelect(option.title)}
                                            >
                                                <span className="style-item-title">{option.title}</span>
                                                <span className="style-item-desc">{option.desc}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="prompt-footer">
                            <button className="icon-btn add-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>
                            <button className="icon-btn send-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer-info">
                Studio is still in beta. Check important info.
            </footer>
        </main>
    );
};

export default MainContent;
