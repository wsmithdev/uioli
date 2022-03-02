import { View, Text } from 'react-native'
import React, { useContext } from "react";
import { useRoute } from '@react-navigation/native';



const Notifications = (props) => {
  const notifications = props.userInfo.notifications
  
  return (
    <View>
      <Text>{notifications[0].message}</Text>

    </View>
  )
}

export default Notifications