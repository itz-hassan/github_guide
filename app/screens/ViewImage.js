import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImage(props) {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => console.log("tapped delete")}>
        <MaterialCommunityIcons
          name="close"
          size={30}
          color="white"
          style={styles.close}
        />
      </TouchableHighlight>
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={30}
        color="white"
        style={styles.delete}
      />
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  close: {
    top: 40,
    left: 30,
    position: "absolute",
  },
  delete: {
    top: 40,
    right: 30,
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImage;
