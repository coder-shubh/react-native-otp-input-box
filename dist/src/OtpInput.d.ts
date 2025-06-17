import React from 'react';
interface OtpInputProps {
    length?: number;
    onOtpChange?: (otp: string) => void;
}
declare const OtpInput: React.FC<OtpInputProps>;
export default OtpInput;
