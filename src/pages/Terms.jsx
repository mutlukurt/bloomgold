import React from 'react';
import '../styles/Home.css'; // Reusing general styles

const Terms = () => {
    return (
        <div className="container section-padding" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="section-title">Terms of Service</h1>
            <div className="content-block" style={{ marginTop: '2rem', lineHeight: '1.6' }}>
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>1. Agreement to Terms</h3>
                <p>
                    By accessing or using the Bloom Gold website, you agree to be bound by these Terms of Service.
                    If you disagree with any part of the terms, you may not access the service.
                </p>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>2. Products and Pricing</h3>
                <p>
                    We make every effort to display as accurately as possible the colors, features, specifications, and details
                    of the products available on Bloom Gold. However, we do not guarantee that the colors, features, specifications,
                    and details of the products will be accurate, complete, reliable, current, or free of other errors.
                    Prices and availability are subject to change without notice.
                </p>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>3. Purchases and Payment</h3>
                <p>
                    You agree to provide current, complete, and accurate purchase and account information for all purchases made
                    at our store. We reserve the right to refuse any order you place with us.
                </p>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>4. Returns and Refunds</h3>
                <p>
                    Please review our Return Policy posted on the website prior to making any purchases.
                </p>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>5. Limitation of Liability</h3>
                <p>
                    In no event shall Bloom Gold, nor its directors, employees, partners, agents, suppliers, or affiliates,
                    be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation,
                    loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or
                    inability to access or use the Service.
                </p>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>6. Contact Information</h3>
                <p>
                    Questions about the Terms of Service should be sent to us at support@bloomgold.com.
                </p>
            </div>
        </div>
    );
};

export default Terms;
