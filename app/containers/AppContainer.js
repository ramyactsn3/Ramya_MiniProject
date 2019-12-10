import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator,Text } from "react-native";
import PeopleList from "../components/PeopleList";
import { fetchPeople } from '../redux/actions/peopleActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AppContainer extends Component {
  componentDidMount() {
    console.log("---componentDidMount called");
    this.props.fetchPeople();
  }

  render() {
    let content = <PeopleList people={this.props.randomPeople.people} />;
    console.log("--title---", this.props.title);
    if (this.props.randomPeople.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    return <View style={styles.container}>
      <Text style={styles.heading}>
        {this.props.randomPeople.title}
      </Text>
      {content}</View>;
  }
}
AppContainer.PropTypes = {
  fetchPeople: PropTypes.func.isRequired,
  randomPeople: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#093339"
  },
  heading: {
    color: 'tomato',
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center'

  },
});

const mapStateToProps = state => {
  return {
    randomPeople: state
  };
}

export default connect(mapStateToProps, { fetchPeople })(AppContainer);