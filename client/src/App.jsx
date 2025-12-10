import React from 'react';
import './App.css'; // You will define the styles (colors, layout, etc.) here

const App = () => {
    return (
        <div className="homepage-container">

            {/* 1. Navigation Bar */}
            <header className="nav-bar">
                <div className="logo">AgriPool</div>
                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#transport">Transport</a>
                    <a href="#planning">Planning</a>
                    <a href="#how-it-works">How It Works</a>
                    <button className="btn-auth">Login/Signup</button>
                </nav>
            </header>

            {/* 2. Hero Section */}
            <section className="hero-section">
                <div className="hero-content-wrapper">
                    <div className="hero-split-left" style={{backgroundImage: 'url(./farm_bg.jpg)'}}>
                        {/* Image/Background for Farm side */}
                    </div>
                    <div className="hero-split-right" style={{backgroundImage: 'url(./truck_bg.jpg)'}}>
                        {/* Image/Background for Truck side */}
                    </div>

                    <div className="hero-overlay-text">
                        <h1 className="hero-title">Grow Smarter | Ship Easier</h1>
                        <p className="hero-subtitle">
                            Precision Input Plans to Maximize Yield & Shared Transport to Cut Costs
                        </p>
                        <div className="hero-cta-buttons">
                            <button className="btn-cta btn-primary-green">Find/Offer Transport</button>
                            <button className="btn-cta btn-primary-blue">Get My Custom Plan</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Feature Blocks Section */}
            <section className="features-section">
                <div className="feature-card feature-planning">
                    <div className="feature-icon">🌿</div>
                    <h2 className="card-title">Precision Planning</h2>
                    <p className="card-description">
                        Maximize Returns with Data. Customized, field-specific fertilizer and input plans. Reduce wastage, boost profitability.
                    </p>
                    <a href="#planning-details" className="learn-more-link">Learn More</a>
                </div>

                <div className="feature-card feature-transport">
                    <div className="feature-icon">🚚</div>
                    <h2 className="card-title">Transport Sharing</h2>
                    <p className="card-description">
                        Share & Save on Logistics. Connect with farmers and carriers with farmers and. Affordable transport farm to market.
                    </p>
                    <a href="#transport-details" className="learn-more-link">Learn More</a>
                </div>
            </section>
            {/* 4. Statistics Section */}
            <section className="stats-section">
                <div className="stat-item">
                    <div className="stat-icon-container stat-green">📊</div>
                    <div className="stat-value">$20%+</div>
                    <div className="stat-label">Average Cost Reduction</div>
                </div>

                <div className="stat-item">
                    <div className="stat-icon-container stat-green">🧑‍🌾</div>
                    <div className="stat-value">1000+</div>
                    <div className="stat-label">Farmers Registered</div>
                </div>

                <div className="stat-item">
                    <div className="stat-icon-container stat-grey">📦</div>
                    <div className="stat-value">500+</div>
                    <div className="stat-label">Shipments Completed</div>
                </div>
            </section>
        </div>
        
    );
};

export default App;