import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
const OtpInput = ({ length = 6, onOtpChange }) => {
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const [focusedIndex, setFocusedIndex] = useState(0);
    const inputs = useRef([]);
    const handleChange = (text, index) => {
        var _a;
        if (/^\d$/.test(text)) {
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);
            if (index < length - 1) {
                (_a = inputs.current[index + 1]) === null || _a === void 0 ? void 0 : _a.focus();
            }
            onOtpChange === null || onOtpChange === void 0 ? void 0 : onOtpChange(newOtp.join(''));
        }
        else if (text === '') {
            const newOtp = [...otp];
            newOtp[index] = '';
            setOtp(newOtp);
            onOtpChange === null || onOtpChange === void 0 ? void 0 : onOtpChange(newOtp.join(''));
        }
    };
    const handleKeyPress = (e, index) => {
        var _a;
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
            (_a = inputs.current[index - 1]) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    const handleFocus = (index) => {
        setFocusedIndex(index);
    };
    return (<View style={styles.container}>
      {otp.map((digit, index) => (<TextInput key={index} ref={(ref) => (inputs.current[index] = ref)} value={digit} keyboardType="number-pad" maxLength={1} onChangeText={(text) => handleChange(text, index)} onKeyPress={(e) => handleKeyPress(e, index)} onFocus={() => handleFocus(index)} style={[
                styles.input,
                focusedIndex === index && styles.inputFocused,
            ]} autoFocus={index === 0}/>))}
    </View>);
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
