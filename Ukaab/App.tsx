import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.text}>Welcome to the Ukaab App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
  },
  text: {
    color: 'black',             // Set text color to black
    fontSize: 18,               // Optional: make it slightly larger
  },
});

export default App;
