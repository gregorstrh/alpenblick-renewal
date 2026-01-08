import { useEffect } from "react";

declare global {
  interface Window {
    ebEnquiryVue: (
      elementId: string,
      config: {
        customerId: number;
        serialNo: string;
        localeId: number;
        categoryLayout: string;
        hideNumberOfChildren: string;
        source: string;
        comment: string;
        gtmDL: string;
      }
    ) => void;
  }
}

export const EasyBookingWidget = () => {
  useEffect(() => {
    const ebbeBasePath = "//easy-booking.at";

    const loadScript = (url: string, callback: () => void) => {
      const existingScript = document.querySelector(`script[src="${url}"]`);
      if (existingScript) {
        callback();
        return;
      }

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = url;
      script.onload = callback;
      document.head.appendChild(script);
    };

    loadScript(ebbeBasePath + "/enquiryForm/easybooking.enquiry.js", () => {
      if (window.ebEnquiryVue) {
        window.ebEnquiryVue("ebOffer", {
          customerId: 11693,
          serialNo: "6811-4870-3917",
          localeId: 2,
          categoryLayout: "2",
          hideNumberOfChildren: "false",
          source: "",
          comment: "",
          gtmDL: "dataLayer",
        });
      }
    });
  }, []);

  return (
    <div className="w-full">
      <div id="ebOffer"></div>
    </div>
  );
};
