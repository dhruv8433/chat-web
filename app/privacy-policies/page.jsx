import React from "react";
import "../../app/style/style.css";
import MyBox from "../common/MyBox";
import MyText from "../common/MyText";

const PrivacyPolicyPage = () => {
  return (
    <MyBox isPrimary={true} className={"rounded-2xl"}>
      {/* <Heading title={"Privacy"} /> */}
      <div className=" privacy-policy-content mt-6">
        <div className="rounded p-4">
          <MyText className="chat-name text-2xl">Introduction</MyText>
          <MyText className="mb-4">
            Welcome to our Privacy Policy page. Here we explain how we collect,
            use, and protect your personal information when you use our website.
          </MyText>

          <MyText className="chat-name text-2xl mt-6">
            Information We Collect
          </MyText>
          <MyText className="mb-1">
            We may collect various types of information when you use our
            website, including:
          </MyText>
          <ul className="mb-4">
            <li>
              <MyText>
                Personal Information: such as your name, email address, etc.
              </MyText>
            </li>
            <li>
              <MyText>
                Usage Information: such as your IP address, browser type, pages
                visited, etc.
              </MyText>
            </li>
            <li>
              <MyText>
                Cookies: We may use cookies to enhance your experience and for
                analytics purposes.
              </MyText>
            </li>
          </ul>

          <MyText className="chat-name text-2xl mt-6">
            How We Use Your Information
          </MyText>
          <MyText>
            We may use the information we collect for various purposes,
            including:
          </MyText>
          <ul className="mb-4">
            <li>
              {" "}
              <MyText>Improving our services</MyText>
            </li>
            <li>
              {" "}
              <MyText>Customizing your experience</MyText>
            </li>
            <li>
              {" "}
              <MyText>Sending promotional emails</MyText>
            </li>
            <li>
              {" "}
              <MyText>Analyzing usage patterns</MyText>
            </li>
          </ul>

          <MyText className="chat-name text-2xl mt-6">
            Information Sharing and Disclosure
          </MyText>
          <MyText className="mb-4">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties.
          </MyText>

          <MyText className="chat-name text-2xl mt-6">Security</MyText>
          <MyText className="mb-4">
            We take reasonable measures to protect your personal information
            from unauthorized access or disclosure.
          </MyText>

          <MyText className="chat-name text-2xl mt-6">
            Changes to This Privacy Policy
          </MyText>
          <MyText className="mb-4">
            We may update our Privacy Policy from time to time. Any changes will
            be posted on this page.
          </MyText>

          <MyText className="chat-name text-2xl mt-6">Contact Us</MyText>
          <MyText className="mb-4">
            If you have any questions about our Privacy Policy, please contact
            us at privacy@example.com.
          </MyText>
        </div>
      </div>
    </MyBox>
  );
};

export default PrivacyPolicyPage;
