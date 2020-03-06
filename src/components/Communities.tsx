import * as React from "react";
import { connect } from "react-redux";
import { fetchAllCommunities } from "../actions/fetchActions";
import { community } from "../store/communities/types";
import { fetchAllHomes } from "../actions/fetchActions";
import { home } from "../store/homes/types";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  communities: [community];
  homes: [home];
  fetchAllCommunities: Function;
  fetchAllHomes: Function;
  countedHomes: { [key: string]: number };
}
class CommunityComponent extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchAllCommunities();
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
    const postItem = this.props.communities.map((community: community) => (
      <div className="col-md-12 mb-4 mt-4" key={community.id}>
        <div className="row">
          <div className="col-md-4">
            <img
              onError={this.addDefaultSrc}
              className="img-responsive img-thumbnail"
              src={community.imgUrl}
            />
          </div>
          <div className="col-md-4">
            <h3>{community.name}</h3>
            <p>Area : {community.group}</p>
            <p>
              Average home price:{" "}
              {this.props.countedHomes.hasOwnProperty(community.id)
                ? this.formatter.format(
                    Math.round(
                      this.props.countedHomes[community.id] /
                        this.props.countedHomes["count" + community.id]
                    )
                  )
                : "No Data Available"}
            </p>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <Header />
        <div className="container">{postItem}</div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: {
  communities: { communities: [community] };
  homes: { homes: [home]; homeCount: { [key: string]: number } };
  countedHomes: [];
}) => {
  return {
    communities: state.communities.communities,
    homes: state.homes.homes,
    countedHomes: state.homes.homeCount
  };
};

export default connect(mapStateToProps, {
  fetchAllCommunities,
  fetchAllHomes
})(CommunityComponent);
