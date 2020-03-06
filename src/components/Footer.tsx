import * as React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="border-top bg-white border-dark text-right footer fixed-bottom">
        <footer className="text-secondary text-small mr-4 mb-4 mt-2">
          {" "}
          @copyright Gursharnbir Singh
        </footer>
      </div>
    );
  }
}

export default Footer;
