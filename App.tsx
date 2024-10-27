import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GoMarketMe from 'gomarketme-react-native-expo';

export default function App() {

  const initializeSDK = async () => {
    await GoMarketMe.initialize('YOUR_API_KEY'); // Replace with your actual API key
  };

  initializeSDK();
  
  return (
    <View style={styles.container}>
      <Text>Hi, there!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
