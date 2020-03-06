import * as React from "react";
import { connect } from "react-redux";
import { fetchAllCommunities } from "../actions/fetchActions";
import { community } from "../store/communities/types";
import { fetchAllHomes } from "../actions/fetchActions";
import { home } from "../store/homes/types";

interface Props {
  communities: [community];
  homes: [home];
  fetchAllCommunities: Function;
  fetchAllHomes: Function;
}
class CommunityComponent extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchAllCommunities();
    this.props.fetchAllHomes();
  }

  render() {
    const postItem = this.props.communities.map((community: community) => (
      <div className="col-md-6" key={community.id}>
        <img className="img-fluid img-thumbnail" src={community.imgUrl} />
        <h3>{community.name}</h3>
        <p>{community.group}</p>
      </div>
    ));
    return <div className="container">{postItem}</div>;
  }
}

const mapStateToProps = (state: {
  communities: { communities: [community] };
  homes: { homes: [home] };
}) => {
  return {
    communities: state.communities.communities,
    homes: state.homes.homes
  };
};

export default connect(mapStateToProps, { fetchAllCommunities, fetchAllHomes })(
  CommunityComponent
);
