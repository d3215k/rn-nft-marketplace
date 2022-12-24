import { View, Text, Image } from 'react-native'
import { assets } from '../constants'

export const NFTTitle = ({ title, subTitle}) => {
  return (
    <View>
      <Text className="font-semibold text-xl">{ title }</Text>
      <Text className="text-sm">{ subTitle }</Text>
    </View>
  )
}

export const EthPrice = ({ price }) => {
  return (
    <View className="flex-row items-center">
      <Image 
        source={assets.eth}
        resizeMode='contain'
        className="w-5 h-5 mr-1"
      />
      <Text className="text-sm font-semibold">{price}</Text>
    </View>
  )
}

export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      className={`w-12 h-12 ${index === 0 ? '' : '-ml-3'}`}
    />
  )
}

export const People = () => {
  return (
    <View className="flex-row">
      {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
        <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
      ))}
    </View>
  )
}

export const EndDate = () => {
  return (
    <View className="px-4 py-2 bg-white justify-center items-center shadow shadow-black max-w-sm">
      <Text className="text-sm text-black">
          Ending in 
      </Text>
      <Text className="font-medium text-lg text-black">
          12h 30m
      </Text>
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View className="w-full px-4 -mt-8 flex-row justify-between">
      <People />
      <EndDate />
    </View>
  )
}