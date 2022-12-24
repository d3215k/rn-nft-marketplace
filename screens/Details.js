import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'

import { SIZES, SHADOWS, assets } from '../constants';
import { 
  CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid 
} from '../components';
import React from 'react';

const DetailsHeader = ({ data, navigation }) => (
  <View className="w-full h-[350]">
    <Image 
      source={data.image}
      resizeMode='cover'
      className="w-full h-full"
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={10}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={10}
    />
  </View>
);

const Details = ({ route, navigation}) => {
  const { data } = route.params;
  
  return (
    <SafeAreaView className="flex-1 relative" >
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />
        <View className="w-full absolute bottom-0 px-4 py-2 justify-center items-center bg-white/30 z-10">
          <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
        </View>

        <FlatList
          data={data.bids}
          renderItem={({item}) => <DetailsBid bid={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
          ListHeaderComponent={() => (
            <React.Fragment>
              <DetailsHeader data={data} navigation={navigation} />
              <SubInfo />
              <View style={{ padding: SIZES.font }}>
                <DetailsDesc data={data} />
                {data.bids.length > 0 && (
                  <Text className="text-md font-semibold text-black">
                    Current bid
                  </Text>
                )}
              </View>
            </React.Fragment>
          )}
        />
    </SafeAreaView>
  )
}

export default Details