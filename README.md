<!-- Title -->
<h1 align="center">react-native-otp-input-box</h1>

<!-- Badges -->
<p align="center">
  <img src="https://img.shields.io/npm/v/react-native-otp-input-box" alt="npm version">
  <img src="https://img.shields.io/npm/dm/react-native-otp-input-box" alt="downloads">
  <img src="https://img.shields.io/github/license/yourusername/react-native-otp-input-box" alt="license">
</p>

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

````bash
# with npm
npm install react-native-otp-input-box

# with yarn
yarn add react-native-otp-input-box


<!-- Usage -->
<h2>Usage</h2>
<p align="center">
  A simple, customizable OTP input component for React Native with auto-focus and smooth digit navigation.
</p>
```js
import React from 'react';
import { View } from 'react-native';
import { OtpInput } from 'react-native-otp-input-box';

const App = () => {
  const handleOtpChange = (otp: string) => {
    console.log('Entered OTP:', otp);
  };

  return (
    <View>
      <OtpInput length={6} onOtpChange={handleOtpChange} />
    </View>
  );
};

export default App;
````

```bash
<!--🎨 Styling-->
<h2>🎨 Styling</h2>
<p align="center">
  Basic styling is applied by default. For customization, feel free to fork or modify the styles directly in the component file.
Future versions may support style props.
```

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
MIT © coder-shubh
---

### 🔧 Notes

- Replace `"yourusername"` in GitHub URLs with your GitHub username.
- If you want to include a demo GIF/image, upload it to your repo (e.g., in `assets/`) and uncomment the `<img>` block.

Let me know if you’d like this bundled as a downloadable `.md` or `.docx` file.
