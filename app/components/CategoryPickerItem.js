import React from "react";
import { View, StyleSheet, Platform, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={60}
        />

        <AppText style={styles.label}>{item.label}</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Platform.OS === "ios" ? 30 : 20,
    paddingVertical: Platform.OS === "ios" ? 15 : 10,
    alignItems: "center",
    width: "33.333%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
    fontSize: Platform.OS === "ios" ? 18 : 16,
  },
});

export default CategoryPickerItem;
