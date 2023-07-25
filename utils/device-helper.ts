// import * as Device from "expo-device";
// import { Platform } from "react-native";

export const getAdvLocationCount = () => {
  // const deviceRam = Device.totalMemory / 1073741824;
  let advLocation = 500;
  // if (Platform.OS == "ios") {
  //   if (deviceRam <= 3) {
  //     advLocation = 150;
  //   } else if (deviceRam > 3 && deviceRam < 6) {
  //     advLocation = 80;
  //   } else {
  //     advLocation = 50;
  //   }
  // } else if (Platform.OS == "android") {
  //   if (deviceRam <= 4) {
  //     advLocation = 150;
  //   } else if (deviceRam > 4 && deviceRam < 8) {
  //     advLocation = 80;
  //   } else {
  //     advLocation = 50;
  //   }
  // }
  return advLocation;
};
