import { TouchableOpacity, Text, Image } from 'react-native'

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity className="w-10 h-10 bg-white absolute rounded-full items-center justify-center shadow shadow-black"
      style={{...props}}
      onPress={handlePress}
    >
      <Image className="w-7 h-7"
        source={imgUrl}
        resizeMode="contain"
      />
    </TouchableOpacity>
  )
}

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity className="bg-black rounded-full px-4 py-3"
      style={{ minWidth, ...props}}
      onPress={handlePress}
    >
        <Text className="text-white text-center"
          style={{fontSize}}>
          Place a bid
        </Text>
    </TouchableOpacity>
  )
}