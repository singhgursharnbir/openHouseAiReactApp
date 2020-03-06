import React from "react";
import { fetchAllHomes } from "../actions/fetchActions";
import { home } from "../store/homes/types";
import { connect } from "react-redux";
import { community } from "../store/communities/types";

interface Props {
  fetchAllHomes: Function;
  homes: [home];
  communityProp: community;
  countedHomes: { [key: string]: number };
}

class Community extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchAllHomes();
  }

  addDefaultSrc(ev: any) {
    ev.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  }

  formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "CAD"
  });

  render() {
    return (
      <div>
        <div className="col-md-12 mb-4 mt-4" key={this.props.communityProp.id}>
          <div className="row">
            <div className="col-md-4">
              <img
                onError={this.addDefaultSrc}
                className="img-responsive img-thumbnail"
                src={this.props.communityProp.imgUrl}
              />
            </div>
            <div className="col-md-4">
              <h3>{this.props.communityProp.name}</h3>
              <p>Area : {this.props.communityProp.group}</p>
              <p>
                Average home price:{" "}
                {this.props.countedHomes.hasOwnProperty(
                  this.props.communityProp.id
                )
                  ? this.formatter.format(
                      Math.round(
                        this.props.countedHomes[this.props.communityProp.id] /
                          this.props.countedHomes[
                            "count" + this.props.communityProp.id
                          ]
                      )
                    )
                  : "No Data Available"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: {
  homes: { homes: [home]; homeCount: { [key: string]: number } };
  countedHomes: [];
}) => {
  return {
    homes: state.homes.homes,
    countedHomes: state.homes.homeCount
  };
};

export default connect(mapStateToProps, {
  fetchAllHomes
})(Community);
