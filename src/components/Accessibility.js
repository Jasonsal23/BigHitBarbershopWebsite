import React from 'react';

export default function Accessibility() {
    return (
        <div className="policy-page">
            <div className="policy-container">
                <h1>Accessibility Statement</h1>
                <p className="policy-updated">Last Updated: January 2025</p>

                <section className="policy-section">
                    <h2>Our Commitment</h2>
                    <p>
                        Big Hit Barbershop is committed to ensuring digital accessibility for people with
                        disabilities. We are continually improving the user experience for everyone and
                        applying the relevant accessibility standards to ensure we provide equal access
                        to all users.
                    </p>
                </section>

                <section className="policy-section">
                    <h2>Accessibility Features</h2>
                    <p>We have implemented the following measures to ensure accessibility:</p>
                    <ul>
                        <li>Clear and consistent navigation throughout our website</li>
                        <li>Alternative text for images</li>
                        <li>Sufficient color contrast for text readability</li>
                        <li>Keyboard-accessible navigation and interactive elements</li>
                        <li>Descriptive link text</li>
                        <li>Responsive design that adapts to different screen sizes and devices</li>
                        <li>ARIA labels for screen reader compatibility</li>
                    </ul>
                </section>

                <section className="policy-section">
                    <h2>Physical Location Accessibility</h2>
                    <p>Our barbershop locations are committed to providing accessible services:</p>
                    <ul>
                        <li>Wheelchair accessible entrances at both locations</li>
                        <li>Accessible parking spaces available nearby</li>
                        <li>Service animals are welcome</li>
                        <li>Staff trained to assist customers with various accessibility needs</li>
                        <li>Flexible appointment scheduling to accommodate individual needs</li>
                    </ul>
                </section>

                <section className="policy-section">
                    <h2>Conformance Status</h2>
                    <p>
                        We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at
                        Level AA. These guidelines explain how to make web content more accessible
                        for people with disabilities and more user-friendly for everyone.
                    </p>
                </section>

                <section className="policy-section">
                    <h2>Feedback</h2>
                    <p>
                        We welcome your feedback on the accessibility of the Big Hit Barbershop website.
                        If you encounter any accessibility barriers or have suggestions for improvement,
                        please contact us:
                    </p>
                    <div className="policy-contact">
                        <p><strong>Las Vegas Location:</strong> (702) 675-6448</p>
                        <p><strong>Kenosha Location:</strong> (262) 657-5055</p>
                    </div>
                    <p>
                        We try to respond to accessibility feedback within 2-3 business days and will
                        work with you to resolve any issues.
                    </p>
                </section>

                <section className="policy-section">
                    <h2>Continuous Improvement</h2>
                    <p>
                        We are continuously working to improve the accessibility of our website and
                        services. If you have any questions or suggestions regarding accessibility at
                        Big Hit Barbershop, please don't hesitate to reach out to us.
                    </p>
                </section>
            </div>
        </div>
    );
}
