import { useState } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';

import { COLORS, NFTData } from '../constants'
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if(!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item) => 
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if(filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }

  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar/>
      
      <View className="relative flex-1">
        <View className="z-0">
          <FlatList
            data={nftData}
            renderItem={({item}) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
          />
        </View>

        <View className="absolute top-0 bottom-0 right-0 left-0 -z-10"
        >
          <View className="h-[300] bg-gray-900"/>
          <View className="flex-2 bg-white"/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home