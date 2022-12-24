import { View, Text, Image } from 'react-native'
import { EthPrice } from './SubInfo';

const DetailsBid = ({ bid }) => {
  return (
    <View className="w-full flex-row justify-between mb-2 items-center px-4">
      <View className="flex-row items-center">
        <Image className="w-12 h-12"
          source={bid.image}
          resizeMode="contain"
        />
        <View className="ml-2">
          <Text className="font-semibold text-sm text-black">
            Bid placed by {bid.name}
          </Text>
          <Text className="text-xs text-gray-700 mt-2">
            {bid.name}
          </Text>
        </View>
      </View>

      <EthPrice price={bid.price} />
    </View>
  )
}

export default DetailsBid