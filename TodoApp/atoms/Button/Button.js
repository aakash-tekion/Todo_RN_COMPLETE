import React from 'react'
import { TouchableOpacity,Text} from 'react-native'
import buttonStyles from './Button.css.js'
export default function Button({text,handler,customStyle}) {
  return (
    <TouchableOpacity onPress={handler} style={[buttonStyles.button,customStyle]}>
        <Text style={buttonStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}
