import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header.js"

/**
 * Wireframe/Design Mock:
 * -Header
 *   -Logo
 *   -Nav Items
 * -Body
 *   -Search input
 *   -Restaurant Container
 *     -Restaurant Card
 *      -Food Name
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
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
