import React, { useEffect } from "react";
import "./PrivacyPolicy.css";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="privacy-policy-container">
      <h1>Refund Policy For Dresscode E-Commerce Website</h1>
      <h2>Last Updated: 04-03-2024</h2>
      <p>
        Welcome to the Dresscode E-Commerce site. At Dresscode, we are committed
        to protecting your privacy and ensuring the security of your personal
        information. This Privacy Policy explains how we collect, use, and
        safeguard your data when you visit our website or make use of our
        services. By using the Site, you agree to the terms outlined in this
        Privacy Policy.
      </p>
      <h2 className="privacy-policies-h2-top">1. Eligibility for Refunds:</h2>
      <div className="privacy-policies">
        <h3>a. Defective or Damaged Items: - </h3>
        <p>
          If you have received a defective or damaged item, please contact
          Dresscode's customer service within [insert number of days]
        </p>

        <h3>b. Incorrect Items Received: -</h3>
        <p>
          In the event that you receive an item different from what you ordered,
          please notify us pormptly. Dresscode will arrange for the correct item
          to be sent to you or offer a full refund, including any applicable
          shipping charges.
        </p>

        <h3>c. Change of Mind: -</h3>
        <p>
          Dresscode understands that preferences may change. If you wish to
          return an item due to a change of mind, please contact us within
          [insert number of days] days of receiving the product. In such cases,
          Dresscode may offer a refund or provide store credit. The item must be
          unused, in its original packaging, and returned at the customer's
          expense.
        </p>
      </div>

      <h2>2. Refund Process:</h2>
      <div className="privacy-policies">
        <h3>a. Initiating a Refund: - </h3>
        <p>
          To initiate a refund, contact Dresscode's customer service via [insert
          contact information]. Provide relevant details such as order
          number,reason for the refund. and supporting images for damaged or
          defective item
        </p>

        <h3>b. Refund Approval: -</h3>

        <p>
          Dresscode will review your request and, if eligible, approve the
          refund. You will receive confirmation along with instructions on how
          to return the item.
        </p>

        <h3>c. Return Shipping: -</h3>
        <p>
          For items eligible for return due to a change of mind, the customer is
          responsible for return shipping costs. For defective, damaged, or
          incorrect items, Dresscode will provide return shipping instructions.
        </p>

        <h3>d. Refund Processing Time: -</h3>
        <p>
          Refunds will be processed within [insert number of days] days after
          receiving the returned item.
        </p>
      </div>
      <h2>3. Exclusions:</h2>
      <div className="privacy-policies">
        <h3>a. Final Sale Items: -</h3>
        <p>
          Certain items may be marked as final sale and are not eligible for
          refunds. Please check the product description for details.
        </p>
      </div>
      <h2>4. Exclusions:</h2>
      <div className="privacy-policies">
        <p>
          For any queries regarding our Refund Policy or to initiate a refund,
          please contact Dresscode's customer service at [insert contact
          information]
        </p>
      </div>
      <h2 className="privacy-policies-thank">
        Thank you for choosing Dresscode, where your satisfaction is our
        commitment!
      </h2>
    </div>
  );
};

export default RefundPolicy;
