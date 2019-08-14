import React from 'react';
import Card from '../components/Card';
import { connect } from "react-redux";
import { fetchBeers } from '../actions/index';

class BeersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBeers();
  }
  render() {
    const beers = this.props.api;

    return (
      <div>
          {beers.map((value, index) => {
            return <Card key={index} data={value}/>
          })}
      </div>
    );
  }
}

const mapStateToProps = ({ api = [], isLoadingData = false }) => ({
  api,
  isLoadingData
});

export default connect(
  mapStateToProps,
  {
    fetchBeers
  }
)(BeersContainer);