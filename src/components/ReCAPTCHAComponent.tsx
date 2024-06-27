import React, { useState } from "react";

const ReCAPTCHAComponent = () => {
  const [verified, setVerified] = useState(false);

  const handleRecaptcha = (value: any) => {
    console.log("Captcha value:", value);
    if (value) {
      setVerified(true);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (verified) {
      // Proceed with form submission
      console.log("Form submitted");
    } else {
      console.log("Please verify that you are a human!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Your form fields here */}
        
      </form>
    </div>
  );
};

export default ReCAPTCHAComponent;
