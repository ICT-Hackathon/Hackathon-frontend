import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";
import { Entypo, Feather } from "@expo/vector-icons";
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default function CameraPage({navigation}) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const isFocused = useIsFocused();

  if (!permission || !permission.granted) {
    Alert.alert(
      "카메라 권한을 허용해주세요",
      "카메라 권한이 없으면 현재 서비스를 이용하실 수 없어요",
      [
        {
          text: "다음에 하기",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "권한 설정하기",
          onPress: () => {
            requestPermission();
          },
        },
      ],
      { cancelable: false },
    );
  }

  return (
    <View style={styles.container}>
      {isFocused && (
        <Camera style={styles.camera} type={type}>
          <View style={styles.XButtonContainer}>
            <TouchableOpacity style={styles.Xbutton} onPress={() => {navigation.navigate('Main')}}>
              <Feather name="x" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Entypo name="camera" size={50} color="white" />
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  camera: {
    flex: 1,
  },
  XButtonContainer: {
    flex: 1,
    alignItems: "left",
  },
  Xbutton: {
    marginTop: 30,
    marginLeft: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 40,
  },
  button: {
    backgroundColor: "#3084F2",
    borderRadius: 100,
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  permissionButton: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#007AFF",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
});
