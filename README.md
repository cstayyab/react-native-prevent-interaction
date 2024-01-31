# react-native-prevent-interaction

A React Native component designed to prevent user interaction with the application UI during certain conditions, such as loading data or processing input. This component is particularly useful for enhancing user experience by preventing accidental taps or gestures on the UI elements when the app is in an intermediate state.

## Features

- Easy to integrate with any React Native project.
- Highly customizable to fit various use cases.
- Lightweight with no external dependencies.

## Installation

Install via npm:

```bash
npm install react-native-prevent-interaction
```

Or using yarn:

```bash
yarn add react-native-prevent-interaction
```

## Importing the Component

The `PreventInteractionWhile` component can be imported using either named or default import syntax. Here's how you can do it:

### Using Named Import

```jsx
import { PreventInteractionWhile } from 'react-native-prevent-interaction';
```

### Using Default Import

```jsx
import PreventInteractionWhile from 'react-native-prevent-interaction';
```

We recommend using named imports for consistency, especially if your project imports multiple exports from the library.

## Usage

Here's a simple example to demonstrate how to use the `PreventInteractionWhile` component:

```jsx
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, Button, Alert } from 'react-native';
import { PreventInteractionWhile } from 'react-native-prevent-interaction'; // or use default import

const ExampleApp = () => {
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoadingData(false);
    }, 2000);
  }, []);

  const handlePress = () => {
    Alert.alert("Button Clicked", "The button is active and not blocked by loading.");
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PreventInteractionWhile whileCondition={loadingData} />
      <Button onPress={handlePress} title="Press Me" />
      {loadingData ? <ActivityIndicator size="large" /> : <Text>Data Loaded</Text>}
      <Text>The button above is enabled but cannot be interacted with while data is loading.</Text>
    </View>
  );
};
```

## Props

- **whileCondition**: A boolean that controls the visibility of the overlay. When `true`, user interaction is prevented.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements or suggestions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository.

## Acknowledgments

- Thanks to everyone who has contributed to this project!
