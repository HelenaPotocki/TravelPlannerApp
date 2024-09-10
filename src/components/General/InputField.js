import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import formStyle from '../../style/formStyle';

const InputField = ({ label, value, onChangeText, placeholder, editable = true, onPress }) => (
  <View>
    <Text style={formStyle.label}>{label}</Text>
    <TouchableOpacity onPress={onPress} activeOpacity={editable ? 1 : 0.7}>
      <TextInput
        style={formStyle.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={editable}
        pointerEvents={editable ? 'auto' : 'none'}
      />
    </TouchableOpacity>
  </View>
);

export default InputField;
