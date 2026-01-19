import React from 'react';
import '../styles/Home.css'; // Reusing general styles

const Privacy = () => {
    return (
        <div className="container section-padding" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="section-title">Privacy Policy</h1>
            <div className="content-block" style={{ marginTop: '2rem', lineHeight: '1.6' }}>
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>1. Introduction</h3>
                <p>
                    At Bloom Gold, we value your privacy and are committed to protecting your personal information.
                    This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website
                    or make a purchase.
                </p>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>2. Information We Collect</h3>
                <p>We collect information that you provide directly to us, including:</p>
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Name, email address, shipping and billing address.</li>
                    <li>Payment information (processed securely by our payment providers).</li>
                    <li>Order history and communication preferences.</li>
                </ul>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>3. How We Use Your Information</h3>
                <p>We use your information to:</p>
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Process and fulfill your orders.</li>
                    <li>Communicate with you about your order status.</li>
                    <li>Send you updates and marketing communications (if you opt-in).</li>
                    <li>Improve our website and customer service.</li>
                </ul>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>4. Data Security</h3>
                <p>
                    We implement appropriate security measures to protect your personal information against unauthorized
                    access, alteration, disclosure, or destruction. However, no internet transmission is completely secure,
                    and we cannot guarantee absolute security.
                </p>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>5. Contact Us</h3>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at privacy@bloomgold.com.
                </p>
            </div>
        </div>
    );
};

export default Privacy;
