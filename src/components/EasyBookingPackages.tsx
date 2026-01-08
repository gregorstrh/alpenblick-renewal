import { useEffect } from "react";

declare global {
  interface Window {
    jQuery: any;
  }
}

export const EasyBookingPackages = () => {
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
          if (jq.fn.ebPackages) {
            jq("#packagesFrame").ebPackages({
              customerId: 11693,
              serialNo: "6811-4870-3917",
              localeId: 2,
              category: "all",
              offer: "all",
              stepOne: "off",
              loadCSS: true,
              packagesPerPage: 4,
              numPersons: 2,
              numChildren: 0,
              arrivalDate: "0000-00-00",
              showFilters: false,
              showCategoryFilter: false,
              listTemplate: "https://www.easy-booking.at/ebPlugins/packages/packageList/html/package_v3.html",
              sortBy: "random",
              conversionEnquiry: "",
              conversionReservation: "",
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

    loadScript("//www.easy-booking.at/ebPlugins/packages/jquery.easybooking.packages.v4.js")
      .then(initWidget);
  }, []);

  return (
    <div className="w-full">
      <div id="packagesFrame"></div>
    </div>
  );
};
