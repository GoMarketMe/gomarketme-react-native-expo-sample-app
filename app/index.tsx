import GoMarketMe, { GoMarketMeAffiliateMarketingData } from 'gomarketme-react-native-expo';
import { View, Text } from 'react-native';

export default function Index() {

  GoMarketMe.initialize('API_KEY'); // Replace with your actual API key

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello 2.0.0</Text>
    </View>
  );
}