import './MainContent.css';

const MainContent = () => {
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
                            <button className="style-select-btn">
                                Select Style
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
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
