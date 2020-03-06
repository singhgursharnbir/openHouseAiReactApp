import * as React from "react";
import { connect } from "react-redux";
import { community } from "../store/communities/types";
import { fetchAllHomes, fetchAllCommunities } from "../actions/fetchActions";
import { home } from "../store/homes/types";
import Community from "./Community";
import Error from "./Error";

interface Props {
  communities: [community];
  errors: String;
  fetchAllCommunities: Function;
  fetchAllHomes: Function;
}

class CommunityComponent extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchAllCommunities();
    this.props.fetchAllHomes();
  }

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
}) => {
  return {
    errors: state.errors,
    communities: state.communities.communities,
    homes: state.homes.homes
  };
};

export default connect(mapStateToProps, {
  fetchAllCommunities,
  fetchAllHomes
})(CommunityComponent);
