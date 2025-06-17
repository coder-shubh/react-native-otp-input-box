import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, TextInputKeyPressEventData, NativeSyntheticEvent } from 'react-native';

interface OtpInputProps {
  length?: number;
  onOtpChange?: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length = 6, onOtpChange }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (index < length - 1) {
        inputs.current[index + 1]?.focus();
      }
      onOtpChange?.(newOtp.join(''));
    } else if (text === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      onOtpChange?.(newOtp.join(''));
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputs.current[index] = ref)}
          value={digit}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          onFocus={() => handleFocus(index)}
          style={[
            styles.input,
            focusedIndex === index && styles.inputFocused,
          ]}
          autoFocus={index === 0}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  input: {
    width: 45,
    height: 50,
    borderWidth: 1,
    borderColor: '#999',
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  inputFocused: {
    borderColor: '#007AFF', // iOS blue fallback
    borderWidth: 2,
  },
});

export default OtpInput;
