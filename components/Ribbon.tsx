import React from "react";
import { Stack, Text, XStack } from "tamagui";

interface RibbonProps {
  bg?: string;
  bgb?: string;
  text?: string;
}

const Ribbon: React.FC<RibbonProps> = ({ bg, bgb, text }) => {
  return (
    <XStack>
      <Stack
        bg={bg ? bg : "darkgray"}
        height={24}
        right={0}
        marginTop={10}
        marginRight={-10}
        padding={3}
        borderTopLeftRadius={4}
        borderTopRightRadius={4}
        borderBottomLeftRadius={4}
        ai="center"
        jc="center"
      >
        <Text fontSize={12} fontWeight={"500"} color={"white"}>
          {text ? text : "Ribbon"}
        </Text>
      </Stack>
      <Stack
        borderTopColor={bgb ? bgb : "gray"}
        mt={34}
        mr={-10}
        width={0}
        height={0}
        backgroundColor={"transparent"}
        borderStyle={"solid"}
        borderTopWidth={10}
        borderRightWidth={10}
        borderBottomWidth={0}
        borderLeftWidth={0}
        borderRightColor={"transparent"}
        borderBottomColor={"transparent"}
        borderLeftColor={"transparent"}
      />
    </XStack>

    //     <View style={{ flexDirection: "row" }}>
    //     <View
    //       style={[
    //         styles.typeView,
    //         item.university.type == 2
    //           ? { backgroundColor: "#3268bf" }
    //           : item.university.type == 1
    //           ? { backgroundColor: "#eda547" }
    //           : { backgroundColor: "#cc434a" },
    //       ]}
    //     >
    //       <Text fontSize={12} color={"white"} fontWeight={"500"}>
    //         {item.university.type == 2
    //           ? "Devlet"
    //           : item.university.type == 1
    //           ? "Vakıf"
    //           : "Yurtdışı"}
    //       </Text>
    //     </View>
    //     <View
    //       style={[
    //         styles.typeLineView,
    //         item.university.type == 2
    //           ? { borderTopColor: "#174082" }
    //           : item.university.type == 1
    //           ? { borderTopColor: "#b37019" }
    //           : { borderTopColor: "#96171d" },
    //       ]}
    //     />
    //   </View>
  );
};

export default Ribbon;

// const styles = StyleSheet.create({
//   typeView: {
//     height: 24,
//     right: 0,
//     marginTop: 10,
//     marginRight: -10,
//     padding: 3,
//     borderTopLeftRadius: 4,
//     borderTopRightRadius: 4,
//     borderBottomLeftRadius: 4,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   typeLineView: {
//     marginTop: 34,
//     marginRight: -10,
//     width: 0,
//     height: 0,
//     backgroundColor: "transparent",
//     borderStyle: "solid",

//     borderTopWidth: 10,
//     borderRightWidth: 10,
//     borderBottomWidth: 0,
//     borderLeftWidth: 0,

//     borderRightColor: "transparent",
//     borderBottomColor: "transparent",
//     borderLeftColor: "transparent",
//   },
// });
