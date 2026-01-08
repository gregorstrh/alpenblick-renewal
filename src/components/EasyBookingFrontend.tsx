import { useEffect } from "react";

declare global {
  interface Window {
    jQuery: any;
  }
}

export const EasyBookingFrontend = () => {
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
          if (jq.fn.ebFrontEnd) {
            jq("#ebFrontEndFrame").ebFrontEnd({
              customerId: 11693,
              serialNo: "6811-4870-3917",
              localeId: 2,
              frameId: "ebFrontEndPlugin",
              encapsulated: true,
              backgroundColor: "#fe9200",
              fontColor: "#000000",
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

    loadScript("//www.easy-booking.at/bookingengine2/js/jquery.easybooking.frontend.js")
      .then(initWidget);
  }, []);

  return (
    <div className="w-full">
      <div id="ebFrontEndFrame"></div>
    </div>
  );
};
