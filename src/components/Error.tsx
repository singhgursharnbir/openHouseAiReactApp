import * as React from "react";

class Error extends React.Component {
  refreshPage() {
    window.location.reload(false);
  }

  render() {
    return (
      <div className="text-center mt-4">
        <div>
          Error found while fetching data please try again
          <button
            type="button"
            className="btn btn-secondary ml-4"
            onClick={this.refreshPage}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
}

export default Error;
