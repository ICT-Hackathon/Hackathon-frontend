import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";
import { Entypo, Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import axios from "axios";
const { width, height } = Dimensions.get("window");

export default function CameraPage({ navigation }) {
  const [ratio, setRatio] = useState("4:3");
  const [isRatioSet, setIsRatioSet] = useState(false);
  const [camera, setCamera] = useState(null);
  const [imagePadding, setImagePadding] = useState(0);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const isFocused = useIsFocused();
  const screenRatio = height / width;

  const cameraPermission = () => {
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
  };

  useEffect(() => {
    if (isFocused && camera) {
      cameraPermission();
    }
  }, [isFocused]);

  const prepareRatio = async () => {
    let desiredRatio = "4:3";

    if (Platform.OS === "android") {
      const ratios = await camera.getSupportedRatiosAsync();

      let distances = {};
      let realRatios = {};
      let minDistance = null;
      for (const ratio of ratios) {
        const parts = ratio.split(":");
        const realRatio = parseInt(parts[0]) / parseInt(parts[1]);
        realRatios[ratio] = realRatio;

        const distance = screenRatio - realRatio;
        distances[ratio] = realRatio;
        if (minDistance == null) {
          minDistance = ratio;
        } else {
          if (distance >= 0 && distance < distances[minDistance]) {
            minDistance = ratio;
          }
        }
      }

      desiredRatio = minDistance;

      const remainder = Math.floor(
        (height - realRatios[desiredRatio] * width) / 2,
      );

      setImagePadding(remainder);
      setRatio(desiredRatio);
      setIsRatioSet(true);
    }
  };

  const setCameraReady = async () => {
    if (!isRatioSet) {
      await prepareRatio();
    }
  };

  const handleCapture = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const res = await camera.takePictureAsync(options);
      try {
        const response = await fetch("http://172.30.1.73:5000/apiocr", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: res.base64 }),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {isFocused && (
        <Camera
          style={[
            styles.camera,
            { marginTop: imagePadding, marginBottom: imagePadding },
          ]}
          onCameraReady={setCameraReady}
          ratio={ratio}
          ref={(ref) => {
            setCamera(ref);
          }}
        >
          <View style={styles.XButtonContainer}>
            <TouchableOpacity
              style={styles.Xbutton}
              onPress={() => {
                navigation.navigate("홈");
              }}
            >
              <Feather name="x" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleCapture}>
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
