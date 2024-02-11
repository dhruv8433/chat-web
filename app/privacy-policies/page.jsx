import React from "react";
import Heading from "../common/Heading";
import "../../app/style/style.css";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Heading title={"Privacy"} />
      <div className="primary privacy-policy-content rounded-2xl mt-6">
        <div className="rounded p-4">
          <h2 className="chat-name text-2xl">Introduction</h2>
          <p className="mb-4">
            Welcome to our Privacy Policy page. Here we explain how we collect,
            use, and protect your personal information when you use our website.
          </p>

          <h2 className="chat-name text-2xl mt-6">Information We Collect</h2>
          <p className="mb-1">
            We may collect various types of information when you use our
            website, including:
          </p>
          <ul className="mb-4">
            <li>
              Personal Information: such as your name, email address, etc.
            </li>
            <li>
              Usage Information: such as your IP address, browser type, pages
              visited, etc.
            </li>
            <li>
              Cookies: We may use cookies to enhance your experience and for
              analytics purposes.
            </li>
          </ul>

          <h2 className="chat-name text-2xl mt-6">
            How We Use Your Information
          </h2>
          <p>
            We may use the information we collect for various purposes,
            including:
          </p>
          <ul className="mb-4">
            <li>Improving our services</li>
            <li>Customizing your experience</li>
            <li>Sending promotional emails</li>
            <li>Analyzing usage patterns</li>
          </ul>

          <h2 className="chat-name text-2xl mt-6">
            Information Sharing and Disclosure
          </h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties.
          </p>

          <h2 className="chat-name text-2xl mt-6">Security</h2>
          <p className="mb-4">
            We take reasonable measures to protect your personal information
            from unauthorized access or disclosure.
          </p>

          <h2 className="chat-name text-2xl mt-6">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. Any changes will
            be posted on this page.
          </p>

          <h2 className="chat-name text-2xl mt-6">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our Privacy Policy, please contact
            us at privacy@example.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
