import React from "react";
import { TouchableOpacity, Text } from "react-native";

const ListItem = ({ item, index, onPress }: any) => {
  return (
    <TouchableOpacity
      style={{ margin: 15 }}
      onPress={() => onPress(item)}
    >
      <Text style={{ fontSize: 20, fontWeight: "500", color: "black" }}>{`${index + 1} - ${item.title}`}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(ListItem);
