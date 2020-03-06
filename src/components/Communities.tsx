import * as React from "react";
import { connect } from "react-redux";
import { community } from "../store/communities/types";
import { fetchAllHomes, fetchAllCommunities } from "../actions/fetchActions";
import { home } from "../store/homes/types";
import Community from "./Community";
import Error from "./Error";

interface Props {
  communities: [community];
  homes: [home];
  errors: String;
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
    const postItem =
      this.props.errors === "" ? (
        this.props.communities.map((community: community) => (
          <Community communityProp={community} />
        ))
      ) : (
        <Error />
      );
    return <div className="container">{postItem}</div>;
  }
}

const mapStateToProps = (state: {
  errors: string;
  communities: { communities: [community] };
  homes: { homes: [home]; homeCount: { [key: string]: number } };
  countedHomes: [];
}) => {
  return {
    errors: state.errors,
    communities: state.communities.communities,
    homes: state.homes.homes,
    countedHomes: state.homes.homeCount
  };
};

export default connect(mapStateToProps, {
  fetchAllCommunities,
  fetchAllHomes
})(CommunityComponent);
