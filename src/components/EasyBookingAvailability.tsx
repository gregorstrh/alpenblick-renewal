import { useEffect } from "react";

declare global {
  interface Window {
    jQuery: any;
  }
}

export const EasyBookingAvailability = () => {
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
          if (jq.fn.ebAvailabilityCalendar) {
            jq("#ebAvailability").ebAvailabilityCalendar({
              customerId: 11693,
              serialNo: "6811-4870-3917",
              localeId: 2,
              categories: "all",
              startDate: "default",
              showForm: true
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

    loadScript("//www.easy-booking.at/ebPlugins/availability/jquery.easybooking.availability.js")
      .then(initWidget);
  }, []);

  return (
    <div className="w-full">
      <div id="ebAvailability"></div>
    </div>
  );
};
