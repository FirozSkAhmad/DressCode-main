import React, { useEffect } from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy For Dresscode E-Commerce Site</h1>
      <h2>Last Updated: 04-03-2024</h2>
      <p>
        Welcome to the Dresscode E-Commerce site. At Dresscode, we are committed
        to protecting your privacy and ensuring the security of your personal
        information. This Privacy Policy explains how we collect, use, and
        safeguard your data when you visit our website or make use of our
        services. By using the Site, you agree to the terms outlined in this
        Privacy Policy.
      </p>
      <h2 className="privacy-policies-h2-top">Information We Collect:</h2>
      <div className="privacy-policies">
        <h3>1. Personal Information:</h3>
        <p>
          When you create an account, place an order, or contact us, we may
          collect personal information such as your name, email address, phone
          number, and shipping address.
        </p>

        <h3>2. Order Information:</h3>
        <p>
          We collect details related to your ordes, including the products you
          purchase, payment information, order history.
        </p>

        <h3>3. Automatically Collect Information</h3>
        <p>
          We use cookies and similar technologies to collect information about
          your device. IP address, browser type, and browsing behaviour on our
          website.
        </p>
      </div>
      <h2>How We Use Your Information:</h2>
      <div className="privacy-policies">
        <h3>1. Order Fulfillment:</h3>
        <p>
          We use your personal and order information to process and fulfill your
          orders, provide order update, and offer customer support.
        </p>

        <h3>2. Improving User Experience:</h3>
        <p>
          The data data collected helps us enhance your experience on our
          website, personal content and understand user preferences.
        </p>

        <h3>3. Communication</h3>
        <p>
          We may use your contact details to communicate with you about your
          orders, respond to inquiries, and send promotional materials. You can
          opt out of promotional emails at nay time.
        </p>
        <h3>4. Security Measures:</h3>
        <p>
          We prioritize the security of your informaton and employ
          industry-standard measures to protect agaist unauthorized access,
          disclosure, or alteration.
        </p>
      </div>
      <h2>Information Sharing:</h2>
      <div className="privacy-policies">
        <h3>1. Third-Party Service Providers:</h3>
        <p>
          We may share your information with third-party service providers
          involved in order processing, payment processing, shipping, and
          analytics.
        </p>

        <h3>2. Legal Complaince:</h3>
        <p>
          We may disclose your information if required by law, court order, or
          other legal process.
        </p>
      </div>
      <h2>Your Choices:</h2>
      <div className="privacy-policies">
        <h3>1. Account Information:</h3>
        <p>
          You can review and update your account information by logging into
          your Dresscode account.
        </p>

        <h3>2. Marketing Communications:</h3>
        <p>
          You have the option to opt out of receiving marketing emails by using
          the unsubscribe link in the email or contacting us directly.
        </p>
      </div>
      <h2>Changes to this Privacy Policy:</h2>
      <div className="privacy-policies">
        <p>
          We reserve the right to update this Privacy Policy periodically to
          reflect changes in our practices. We encourage you to review this
          policy regularly.
        </p>
      </div>
      <h2>Contact Us:</h2>
      <div className="privacy-policies">
        <p>
          If you have any questions or concerns about our Privacy Policy, please
          contact us at [contact information].
        </p>
      </div>
      <h2 className="privacy-policies-thank">
        Thank you for choosing Dresscode!
      </h2>
    </div>
  );
};

export default PrivacyPolicy;
