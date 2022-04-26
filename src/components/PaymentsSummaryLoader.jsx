import React from "react";
import ContentLoader from "react-content-loader";

export const PaymentsSummaryLoader = () => {
  return (
    <ContentLoader
      speed={2}
      className="w-full"
      viewBox="0 0 476 124"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="-2" y="5" rx="3" ry="3" width="100%" height="60" />
    </ContentLoader>
  );
};
