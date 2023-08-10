import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useState } from "react";
import logo from "../assets/Logo2.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import naver from "../assets/naver.png";
import kakao from "../assets/kakao.png";
export default function Register({ navigation, route }) {
  const [oauthName, setOauthName] = useState([
    ["구글 계정으로 시작", styles.white, google],
    ["카카오톡으로 시작", styles.yellow, kakao],
    ["페이스북으로 시작", styles.blue, facebook],
    ["네이버로 시작", styles.green, naver],
    ["게스트로 시작", styles.gray, null],
  ]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />
      <Text style={styles.title}>Read;able</Text>
      <Text style={styles.text}>글이 취미가 되다</Text>
      {oauthName.map((number, index) => {
        return (
          <Pressable onPress={navigation.navigate("Survey")}>
            <View
              key={index}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Image
                style={{
                  maxHeight: index == 3 ? 20 : 35,
                  maxWidth: index == 3 ? 20 : 35,
                  top: index == 3 ? 22 : 14,
                  left: index == 3 ? 19 : 10,
                  position: "absolute",
                  zIndex: 1,
                }}
                source={number[2]}
              ></Image>
              <Text style={[styles.oauth, number[1]]}>{number[0]}</Text>
            </View>
          </Pressable>
        );
      })}

      <Text style={[styles.oauth, styles.blue]}>페이스북으로 시작</Text>
      <Text style={[styles.oauth, styles.green]}>네이버로 시작</Text>
      <Text style={[styles.oauth, styles.gray]}>게스트로 시작</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  white: {
    backgroundColor: "white",
  },
  yellow: {
    backgroundColor: "#FFE812",
  },
  blue: {
    backgroundColor: "#1877F2",
  },
  green: {
    backgroundColor: "#1EC800",
  },
  gray: {
    backgroundColor: "#DADADA",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    maxWidth: 175,
    maxHeight: 175,
    marginTop: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#3172DD",
  },
  text: {
    marginBottom: 180,
    fontSize: 15,
    fontWeight: "400",
    color: "gray",
  },
  oauth: {
    marginTop: 10,
    backgroundColor: "white",
    fontSize: 14,
    paddingTop: 12,
    paddingBottom: 12,
    width: 320,
    textAlign: "center",
  },
  icon: {
    maxWidth: 10,
    maxHeight: 10,
  },
});
