import React, { useRef, useState } from "react";
import { View, TextInput, StyleSheet, } from "react-native";
const OtpInput = ({ length = 6, onOtpChange, keyboardType = "number-pad", autoFocus = true, inputStyle, containerStyle, }) => {
    const [otp, setOtp] = useState(Array(length).fill(""));
    const [focusedIndex, setFocusedIndex] = useState(0);
    const inputs = useRef([]);
    const handleChange = (text, index) => {
        var _a;
        if (text.length > 1)
            return;
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
        onOtpChange === null || onOtpChange === void 0 ? void 0 : onOtpChange(newOtp.join(""));
        if (text && index < length - 1) {
            (_a = inputs.current[index + 1]) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    const handleKeyPress = (e, index) => {
        var _a;
        if (e.nativeEvent.key === "Backspace") {
            const newOtp = [...otp];
            if (otp[index] === "" && index > 0) {
                (_a = inputs.current[index - 1]) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else {
                newOtp[index] = "";
                setOtp(newOtp);
                onOtpChange === null || onOtpChange === void 0 ? void 0 : onOtpChange(newOtp.join(""));
            }
        }
    };
    const handleFocus = (index) => {
        setFocusedIndex(index);
    };
    return (<View style={[styles.container, containerStyle]}>
      {otp.map((digit, index) => (<TextInput key={index} ref={(ref) => {
                inputs.current[index] = ref;
            }} value={digit} keyboardType={keyboardType} maxLength={1} onChangeText={(text) => handleChange(text, index)} onKeyPress={(e) => handleKeyPress(e, index)} onFocus={() => handleFocus(index)} style={[
                styles.input,
                inputStyle,
                focusedIndex === index && styles.inputFocused,
            ]} autoFocus={autoFocus && index === 0}/>))}
    </View>);
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
