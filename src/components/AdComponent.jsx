// import React, { useEffect, useState, useRef } from "react";

// const AdComponent = ({ adSlot, onStatusChange }) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const adRef = useRef(null);

//     useEffect(() => {
//         try {
//             if (window.adsbygoogle) {
//                 (window.adsbygoogle = window.adsbygoogle || []).push({});
//             }
//         } catch (e) {
//             console.error("AdSense error:", e);
//         }

//         // Polling check to see if the ad was filled
//         const checkAdStatus = setInterval(() => {
//             if (adRef.current) {
//                 const status = adRef.current.getAttribute("data-ad-status");
//                 // If Google marks it as filled, or if it has any height
//                 if (status === "filled" || adRef.current.offsetHeight > 0) {
//                     setIsVisible(true);
//                     if (onStatusChange) onStatusChange("filled");
//                     clearInterval(checkAdStatus);
//                 } else if (status === "unfilled") {
//                     setIsVisible(false);
//                     if (onStatusChange) onStatusChange("unfilled");
//                     clearInterval(checkAdStatus);
//                 }
//             }
//         }, 1000);

//         return () => clearInterval(checkAdStatus);
//     }, [onStatusChange]);

//     return (
//         <div
//             className="ad-wrapper"
//             style={{
//                 textAlign: "center",
//                 overflow: "hidden",
//                 transition: "opacity 0.3s ease, height 0.3s ease",
//                 display: isVisible ? "block" : "none",
//                 width: "100%",
//                 height: isVisible ? "auto" : "0",
//                 opacity: isVisible ? 1 : 0
//             }}
//         >
//             <ins
//                 ref={adRef}
//                 className="adsbygoogle"
//                 style={{
//                     display: "block",
//                     background: "transparent",
//                 }}
//                 data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
//                 data-ad-slot={adSlot || "YYYYYYYYYY"}
//                 data-ad-format="auto"
//                 data-full-width-responsive="true"
//             ></ins>
//         </div>
//     );
// };

// export default AdComponent;
