// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   Pressable,
//   SafeAreaView,
// } from "react-native";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setSelectedPoint } from "../../../bussiness/reducers/departmentDetailsReducer";
// import DismissKeyboardView from "../../../HOC/DismissKeyboardHOC";
// import { useAppDispatch, useAppSelector } from "../../../bussiness/hooks";
// import { useRouter } from "expo-router";

// const ModalPointScreen = () => {
//   const router = useRouter();
//   const dispatch = useAppDispatch();
//   const { selectedPoint } = useAppSelector(
//     (state) => state.departmentDetailsReducer
//   );
//   const [minPoint, setMinPoint] = useState(selectedPoint[0]);
//   const [maxPoint, setMaxPoint] = useState(selectedPoint[1]);

//   return (
//     <>
//       <DismissKeyboardView style={styles.container}>
//         <Text style={styles.headerText}>Taban Puan</Text>
//         <View style={styles.inputsView}>
//           <TextInput
//             style={styles.textInput}
//             placeholder="En Düşük Puan Giriniz"
//             keyboardType="number-pad"
//             inputMode="numeric"
//             value={minPoint.toString()}
//             onChangeText={(e) =>
//               (Number(e) || e == "") && Number(e) <= 500
//                 ? setMinPoint(Number(e))
//                 : null
//             }
//           />
//           <TextInput
//             style={styles.textInput}
//             placeholder="En Yüksek Puan Giriniz"
//             value={maxPoint.toString()}
//             keyboardType="number-pad"
//             inputMode="numeric"
//             onChangeText={(e) =>
//               (Number(e) || e == "") && Number(e) <= 500
//                 ? setMaxPoint(Number(e))
//                 : null
//             }
//           />
//           {minPoint >= maxPoint ? (
//             <Text style={styles.pointWarningText}>
//               Lütfen üste düşük olan, alta yüksek olan puanı yazınız!
//             </Text>
//           ) : null}
//         </View>
//       </DismissKeyboardView>
//       <SafeAreaView
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           backgroundColor: "white",
//         }}
//       >
//         <Pressable
//           style={{
//             paddingVertical: 10,
//             backgroundColor: "#F3F3F3",
//             marginRight: 5,
//             borderRadius: 8,
//             flex: 1,
//             alignItems: "center",
//             margin: 15,
//           }}
//           onPress={() => {
//             return (
//               dispatch(setSelectedPoint([0, 500])),
//               setMinPoint(0),
//               setMaxPoint(500)
//             );
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 14,
//               color: "#BD1E07",
//               fontWeight: "500",
//             }}
//           >
//             Temizle
//           </Text>
//         </Pressable>
//         <Pressable
//           disabled={minPoint > maxPoint ? true : false}
//           style={{
//             paddingVertical: 10,
//             backgroundColor: minPoint > maxPoint ? "gray" : "#0066FF",
//             marginLeft: 5,
//             borderRadius: 8,
//             flex: 1,
//             margin: 15,
//             alignItems: "center",
//           }}
//           onPress={() => {
//             return (
//               dispatch(setSelectedPoint([minPoint, maxPoint])), router.back()
//             );
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 14,
//               color: "white",
//               fontWeight: "500",
//             }}
//           >
//             Uygula
//           </Text>
//         </Pressable>
//       </SafeAreaView>
//     </>
//   );
// };

// export default ModalPointScreen;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     flex: 1,
//     paddingHorizontal: 15,
//   },
//   headerText: {
//     fontWeight: "600",
//     color: "#777777",
//     marginTop: 16,
//   },
//   inputsView: {},
//   textInput: {
//     borderWidth: 1,
//     borderColor: "#D9D9D9",
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 4,
//     marginVertical: 4,
//   },
//   pointWarningText: {
//     color: "red",
//     fontWeight: "600",
//     fontSize: 13,
//   },
// });
