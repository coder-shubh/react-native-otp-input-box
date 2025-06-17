<!-- Title -->
<h1 align="center">react-native-otp-input-box</h1>

<!-- Badges -->
<p align="center">
  <img src="https://img.shields.io/npm/v/react-native-otp-input-box" alt="npm version">
  <img src="https://img.shields.io/npm/dm/react-native-otp-input-box" alt="downloads">
  <a href="./LICENSE">
    <img src="https://img.shields.io/github/license/coder-shubh/react-native-otp-input-box" alt="license">
  </a></p>
<div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
  <!-- First GIF -->
  <img src="https://raw.githubusercontent.com/coder-shubh/react-native-otp-input-box/main/src/assets/vid.gif" alt="Demo 1" width="45%">
    <img src="https://raw.githubusercontent.com/coder-shubh/react-native-otp-input-box/main/src/assets/vido.gif" alt="Demo 1" width="45%">
</div>
<!-- Description -->
<p align="center">
  A simple, customizable OTP input component for React Native with auto-focus and smooth digit navigation.
</p>

<!-- Demo (optional image/gif) -->
<!-- <p align="center">
  <img src="https://raw.githubusercontent.com/yourusername/react-native-otp-input-box/main/assets/demo.gif" alt="OTP Input Demo" width="80%" />
</p> -->

---

## 📚 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Styling](#styling)
- [Development](#development)
- [License](#license)

---

## 📦 Installation

You can install the package using `npm` or `yarn`:

```bash
# with npm
npm install react-native-otp-input-box

# with yarn
yarn add react-native-otp-input-box
```

## Usage

A simple, customizable OTP input component for React Native with auto-focus and smooth digit navigation.

```js
import React from "react";
import { View, StyleSheet } from "react-native";
import { OtpInput } from "react-native-otp-input-box";

const App = () => {
  const handleOtpChange = (otp: string) => {
    console.log("Entered OTP:", otp);
  };

  return (
    <View style={styles.screen}>
      <OtpInput
        length={6}
        onOtpChange={handleOtpChange}
        keyboardType="numeric"
        autoFocus={true}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  inputStyle: {
    borderColor: "#4CAF50",
    borderWidth: 1.5,
    backgroundColor: "#fff",
    fontSize: 20,
    color: "#333",
  },
  containerStyle: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});

export default App;
```

### 🎨 Styling

<p align="center">
    Basic styling is applied by default. For customization, feel free to fork or modify the styles directly in the component file.
    Future versions may support style props.
</p>
<!-- Props -->
<h2>Props</h2>

| Prop                      | Type                                     | Description                                  | Default Value  |
| ------------------------- | ---------------------------------------- | -------------------------------------------- | -------------- |
| `length`                  | `number`                                 | Number of OTP input boxes.                   | `6`            |
| `onOtpChange`             | `(otp: string) => void`                  | Callback function that returns the full OTP. | `undefined`    |
| `keyboardType`            | `'number-pad' \| 'default' \| 'numeric'` | Keyboard type for each input box.            | `'number-pad'` |
| `autoFocus`               | `boolean`                                | Automatically focus on the first input box.  | `true`         |
| `inputStyle` (future)     | `TextStyle`                              | Style object for input box.                  | `default box`  |
| `containerStyle` (future) | `ViewStyle`                              | Style object for the entire input container. | `centered row` |

In this table:

`Prop`: Name of the prop.
`Type`: Type of the prop.
`Description`: Description of what the prop does.
`Default Value`: Default value of the prop, if any.

<!-- License -->
<h2>License</h2>
    MIT License

    Copyright (c) 2025 coder-shubh

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
