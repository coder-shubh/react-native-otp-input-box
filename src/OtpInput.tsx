import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputKeyPressEventData,
  NativeSyntheticEvent,
  ViewStyle,
  TextStyle,
} from "react-native";

interface OtpInputProps {
  length?: number;
  onOtpChange?: (otp: string) => void;
  keyboardType?: "number-pad" | "default" | "numeric";
  autoFocus?: boolean;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const OtpInput: React.FC<OtpInputProps> = ({
  length = 6,
  onOtpChange,
  keyboardType = "number-pad",
  autoFocus = true,
  inputStyle,
  containerStyle,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    onOtpChange?.(newOtp.join(""));

    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index] === "" && index > 0) {
        inputs.current[index - 1]?.focus();
      } else {
        newOtp[index] = "";
        setOtp(newOtp);
        onOtpChange?.(newOtp.join(""));
      }
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => {
            inputs.current[index] = ref;
          }}
          value={digit}
          keyboardType={keyboardType}
          maxLength={1}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          onFocus={() => handleFocus(index)}
          style={[
            styles.input,
            inputStyle,
            focusedIndex === index && styles.inputFocused,
          ]}
          autoFocus={autoFocus && index === 0}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  input: {
    width: 45,
    height: 50,
    borderWidth: 1,
    borderColor: "#999",
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  inputFocused: {
    borderColor: "#007AFF",
    borderWidth: 2,
  },
});

export default OtpInput;
