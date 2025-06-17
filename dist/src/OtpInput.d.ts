import React from "react";
import { ViewStyle, TextStyle } from "react-native";
interface OtpInputProps {
    length?: number;
    onOtpChange?: (otp: string) => void;
    keyboardType?: "number-pad" | "default" | "numeric";
    autoFocus?: boolean;
    inputStyle?: TextStyle;
    containerStyle?: ViewStyle;
}
declare const OtpInput: React.FC<OtpInputProps>;
export default OtpInput;
