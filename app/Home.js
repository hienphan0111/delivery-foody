import { View, Text, SafeAreaView, Image } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  userIcon,
  CheronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline';

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions(
      {
        headerShown: false,
      },
      []
    );
  });

  return (
    <SafeAreaView>
      <Text>
        {/* Header */}
        <View className='flex-row gap-3 items-center mx-4'>
          <Image
            source={{
              uri: 'https://links.papereact.com/wru',
            }}
            className='h-7 bg-gray-300 p-4 rounded-full'
          />
          <View>
            <Text className='font-bold text-gray-400 text-xs'>Deliver Now</Text>
            <Text className='font-bold text-xl'>
              Current Location
              <CheronDownIcon className='h-5 w-5 text-gray-400' />
            </Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default Home;
