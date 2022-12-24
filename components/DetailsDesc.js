import { useState } from 'react'
import { View, Text } from 'react-native'

import { EthPrice, NFTTitle } from './SubInfo';

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View className="w-full flex-row justify-between items-center">
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
        />

        <EthPrice price={data.price} />
      </View>
      
      <View className="my-4">
        <Text className="text-md font-semibold text-black">
          Description
        </Text>
        <View className="mt-2">
          <Text className="text-xs font-regular text-gray-700 leading-relaxed">
            {text}
            {!readMore && ' ...'}
            <Text className="text-xs font-semibold text-black"
              onPress={() => {
                if(!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
             >
              {readMore ? ' Show Less ' : ' Read More '}
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc