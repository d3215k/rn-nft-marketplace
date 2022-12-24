import { View, Text, Image, TextInput } from 'react-native';

import { assets } from '../constants';

const HomeHeader = ({ onSearch }) => {
  return (
    <View className="bg-gray-900 p-4">
      <View className="flex-row justify-between align-middle">
        <Image className="w-[90] h-[25]"
          source={assets.logo}
          resizeMode="contain"
        />

        <View className="h-12 w-12 realtive">
          <Image className="w-full h-full"
            source={assets.person01}
            resizeMode="contain"
          />
          <Image className="absolute w-4 h-4 bottom-0 right-0"
            source={assets.badge}
            resizeMode="contain"
          />
        </View>
      </View>

      <View className="mx-1">
        <Text className="text-white text-sm" >
          Hello, Dede Iskandar 👋
        </Text>
        <Text className="font-semibold text-lg text-white mt-2">
          Let's find a masterpiece
        </Text>

        <View className="mt-4">
          <View className="w-full rounded-md bg-gray-600 flex-row items-center px-4 py-2">
            <Image className="w-6 h-6 mr-2"
              source={assets.search}
              resizeMode="contain"
            />
            <TextInput className="flex-1"
              placeholder='Search NFTs'
              onChangeText={onSearch}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default HomeHeader