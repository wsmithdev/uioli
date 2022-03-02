import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import React from "react";

const DangerButton = (props) => {
  return (
    <View style={styles.container}>
      <Button
        title={props.title}
        buttonStyle={{
          backgroundColor: 'rgba(214, 61, 57, 1)',
          borderWidth: 1.5,
          borderColor: "white",
          borderRadius: 30,
        }}
        containerStyle={{
          width: 300,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ fontWeight: "600", fontSize: 20}}
        onPress={props.pressed}
      />
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  }
});

export default DangerButton;
