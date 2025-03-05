import GoMarketMe, { GoMarketMeAffiliateMarketingData } from 'gomarketme-react-native-expo';
import { useEffect, useState } from "react";
import { View, Text } from 'react-native';

var gmm = GoMarketMe;
const [affiliateMarketingData, setAffiliateMarketingData] = useState<GoMarketMeAffiliateMarketingData | null>();

export default function Index() {

useEffect(() => {
    async function fetchData() {
      await gmm.initialize('API_KEY'); // Replace with your actual API key
      setAffiliateMarketingData(gmm.affiliateMarketingData);
    }

    fetchData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{affiliateMarketingData ? `Hi User coming from affiliate ${affiliateMarketingData.affiliate.id}` : "User is not coming from an affiliate link"}</Text>
    </View>
  );
}
// GoMarketMeAffiliateMarketingData data structure:
//
// GoMarketMeAffiliateMarketingData {
//     campaign {
//       id: string;
//       name: string;
//       status: string;
//       type: string;
//       publicLinkUrl?: string;
//     }
//     affiliate {
//       id: string;
//       firstName: string;
//       lastName: string;
//       countryCode: string;
//       instagramAccount: string;
//       tiktokAccount: string;
//       xAccount: string;
//     }
//     saleDistribution {
//       platformPercentage: string;
//       affiliatePercentage: string;
//     };
//     affiliateCampaignCode: string;
//     deviceId: string;
//     offerCode?: string;
// }
