import { useEffect, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { ToggleButton } from "react-native-paper";

export default function Survey({ navigation, route }) {
  const [value, setValue] = useState("left");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ToggleButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        <ToggleButton icon="format-align-left" value="left" />
        <ToggleButton icon="format-align-right" value="right" />
      </ToggleButton.Group>
      <Pressable onPress={() => navigation.navigate("Tabs")}>
        <Text style={{ color: "orange" }}>취소</Text>
      </Pressable>
    </View>
  );
}
