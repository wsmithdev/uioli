import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Input, Icon } from "react-native-elements";

const InputField = (props) => {

  let isPassword = false

  if(props.isPassword === "true"){
    isPassword = true
  } 
  
  
  return (
    <View style={styles.container}>
      <Input
        placeholder={props.placeholderText}
        onChangeText={props.text}
        autoCapitalize = "none"
        secureTextEntry={isPassword}
    
      />
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  container: {
    width: 300,
    marginHorizontal: 50,
  }
})

export default InputField;
