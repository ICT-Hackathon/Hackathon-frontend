import { useEffect, useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { RadioButton, Appbar } from "react-native-paper";

export default function Survey({ navigation, route }) {
  const [value, setValue] = useState("first");
  return (
    <View
      style={{
        paddingTop: 35,
        flex: 1,
        justifyContent: "",
        paddingLeft: 20,
      }}
    >
      <View
        style={{
          left: -55,
          width: 500,
          justifyContent: "center",
          marginBottom: 30,
          height: 45,
          paddingRight: 20,
          backgroundColor: "#3084F2",
        }}
      >
        <Text style={{ textAlign: "center", color: "#FFF" }}>사전 설문</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          paddingRight: 20,
        }}
      >
        {/* <Text style={styles.headerNum}>1 / 2</Text> */}
        <Text style={styles.headerText}>해당하는 사항에 체크해주세요</Text>
      </View>
      <View style={styles.toggleView}>
        <Text style={styles.infoText}>자신의 학력 정보</Text>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <View style={styles.toggle}>
            <RadioButton value="first" />
            <Text style={styles.toggle_text}>철학</Text>
          </View>
          <View style={styles.toggle}>
            <RadioButton value="second" />
            <Text style={styles.toggle_text}>문학</Text>
          </View>
          <View style={styles.toggle}>
            <RadioButton value="third" />
            <Text style={styles.toggle_text}>경제</Text>
          </View>
          <View style={styles.toggle}>
            <RadioButton value="four" />
            <Text style={styles.toggle_text}>과학</Text>
          </View>
          <View style={styles.toggle}>
            <RadioButton value="five" />
            <Text style={styles.toggle_text}>만화</Text>
          </View>
          <View style={styles.toggle}>
            <RadioButton value="six" />
            <Text style={styles.toggle_text}>IT</Text>
          </View>
          <View style={styles.toggle}>
            <RadioButton value="seven" />
            <Text style={styles.toggle_text}>없음</Text>
          </View>
        </RadioButton.Group>
      </View>
      <Pressable onPress={() => navigation.navigate("Tabs")}>
        <Text
          style={{
            marginTop: 20,
            backgroundColor: "#3084F2",
            color: "white",
            padding: 10,
            marginRight: 290,
            textAlign: "center",
          }}
        >
          확인
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  infoText: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "700",
  },
  toggleView: {},
  headerNum: {
    color: "#3084F2",
  },
  headerText: {
    color: "#3084F2",
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 70,
  },
  toggle: {
    flexDirection: "row",
    marginTop: 20,
  },
  toggle_text: {
    fontSize: 20,
    top: 3,
    fontWeight: "400",
  },
});
