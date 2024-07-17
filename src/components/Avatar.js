import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Avatar = ({img,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
              style={{
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={img} />
            </TouchableOpacity>
  )
}

export default Avatar