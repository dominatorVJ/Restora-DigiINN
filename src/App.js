import React from "react";
import ReactDOM from "react-dom/client";
import Header from "/src/components/Header/Header.js";
import Body from "/src/components/Body/Body.js";
/**
 * Wireframe/Design Mock:
 * -Header
 *   -Logo
 *   -Nav Items
 * -Body
 *   -Search input
 *   -Restaurant Container
 *     -Restaurant Card
 *      -Restaurant Name
 *      -Category
 *      -Rating
 * -Footer
 *   -Copyright
 *   -Social Links
 *   -Address
 *   -Contacts
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
