import { useEffect } from "react";

declare global {
  interface Window {
    jQuery: any;
  }
}

export const EasyBookingCategories = () => {
  useEffect(() => {
    const loadScript = (url: string): Promise<void> => {
      return new Promise((resolve) => {
        const existingScript = document.querySelector(`script[src="${url}"]`);
        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    };

    const initWidget = () => {
      const checkLoaded = () => {
        if (typeof window.jQuery !== "undefined") {
          const jq = window.jQuery as any;
          if (jq.fn.ebCategories) {
            jq("#ebCategories").ebCategories({
              customerId: 11693,
              serialNo: "6811-4870-3917",
              localeId: 2,
              loadCSS: true,
              maxImgWidth: 960,
              maxImgHeight: 960,
              bookingPage: "popup",
              enquiryPage: "popup",
              showAvailability: true,
              showPrices: true,
              showDetails: true,
              category: "all",
              roomLevel: false,
              room: "all",
              categoryDescription: true,
              roomSorting: "random",
              bookingEngine: 2
            });
          } else {
            setTimeout(checkLoaded, 200);
          }
        } else {
          setTimeout(checkLoaded, 200);
        }
      };
      checkLoaded();
    };

    loadScript("//www.easy-booking.at/ebPlugins/categories/jquery.easybooking.categories.v2.js")
      .then(initWidget);
  }, []);

  return (
    <div className="w-full">
      <div id="ebCategories"></div>
    </div>
  );
};
