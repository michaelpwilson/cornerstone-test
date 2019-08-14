import React from 'react';
import { connect } from "react-redux";
import { fetchBeer } from '../actions/index';
import BeerDetails from '../components/BeerDetails';

class BeerContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.id);
  }
  render() {
    const beer = this.props.api;

    return (
      <div>
          <BeerDetails data={beer}/>
      </div>
    );
  }
}

const mapStateToProps = ({ api = {}, isLoadingData = false }) => ({
  api,
  isLoadingData
});

export default connect(
  mapStateToProps,
  {
    fetchBeer
  }
)(BeerContainer);