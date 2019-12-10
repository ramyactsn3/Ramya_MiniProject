import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View } from "react-native";
import PropTypes from "prop-types";

export default class PeopleList extends Component {
  _keyExtractor = item => item.title;

  _renderItem = ({ item }) => {
    //const { name, picture, cell, email } = item;
    const { title, description, imageHref } = item;

    return (
      <View style={styles.cardContainerStyle}>
        <Image
          style={styles.faceImageStyle}
          source={{ uri: imageHref }}
        />
        <View style={{ paddingRight: 5 }}>
          <Text style={styles.cardTextStyle}>
            {title} {"\n"}
            {description} {"\n"}
          </Text>
        </View>

      </View>
    );
  };

  render() {
    return (      
        <FlatList
          style={{ flex: 1 }}
          data={this.props.people}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />    
    );
  }
}

PeopleList.propTypes = {
  people: PropTypes.array
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#093339"
  },
  cardContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    backgroundColor: "#4e8087",
    padding: 10
  },
  faceImageStyle: {
    width: 65,
    height: 65
  },
  cardTextStyle: {
    color: "white",
    textAlign: "left",
  },
  
});
