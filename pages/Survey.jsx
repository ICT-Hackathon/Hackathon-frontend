import { useEffect, useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { RadioButton, Appbar } from "react-native-paper";

export default function Survey({ navigation, route }) {
  const [num, setNum] = useState(0);
  const [value, setValue] = useState("first");
  const field = [
    { val: "first", text: "철학" },
    { val: "second", text: "문학" },
    { val: "third", text: "경제" },
    { val: "four", text: "과학" },
    { val: "five", text: "만화" },
    { val: "six", text: "IT" },
    { val: "seven", text: "없음" },
  ];
  const school = [
    { val: "first", text: "초등학교" },
    { val: "second", text: "중학교" },
    { val: "third", text: "고등학교" },
    { val: "four", text: "대학교" },
  ];
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
        <Text style={styles.headerNum}>{num + 1} / 2</Text>
        <Text style={styles.headerText}>해당하는 사항에 체크해주세요</Text>
      </View>
      <View style={styles.toggleView}>
        <Text style={styles.infoText}>자신이 관심 갖는 분야</Text>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          {num == 0 && school.map((item) => (
            <View style={styles.toggle} key={item.val}>
              <RadioButton value={item.val} />
              <Text style={styles.toggle_text}>{item.text}</Text>
            </View>
          ))}
          {num == 1 && field.map((item) => (
            <View style={styles.toggle} key={item.val}>
              <RadioButton value={item.val} />
              <Text style={styles.toggle_text}>{item.text}</Text>
            </View>
          ))}
        </RadioButton.Group>
      </View>
      <Pressable
        onPress={() => {
          if (num == 0) {
            setNum(1);
          } else {
            navigation.navigate("Tabs");
          }
        }}
      >
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
