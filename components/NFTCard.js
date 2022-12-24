import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { assets } from '../constants';
import { CircleButton, RectButton } from './Button';
import { SubInfo, EthPrice, NFTTitle } from './SubInfo';

const NFTCard = ({data}) => {
  const navigation = useNavigation();

  return (
    <View className="rounded-xl mb-4 bg-white m-4 shadow-2xl shadow-black">
      <View className="w-full h-[230]">
        <Image
          source={data.image}
          resizeMode="cover"
          className="w-full h-full rounded-t-xl"
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />

      <View className="w-full p-4">
        <NFTTitle 
          title={data.name}
          subTitle={data.creator}
        />

        <View className="mt-2 flex-row justify-between align-middle">
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            handlePress={() => navigation.navigate("Details", {data})}
          />
        </View>
      </View>
    </View>
  )
}

export default NFTCard