import React from "react";

const BackArrow = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#E2E8F0" />
      <path
        d="M12.625 10.375L10.875 12L12.625 13.625"
        stroke="#334155"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default BackArrow;
