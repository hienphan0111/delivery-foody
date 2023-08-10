import { View, Text, TextInput, SafeAreaView, Image } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
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
    <SafeAreaView className='bg-white pt-5'>
      <Text className='w-full'>
        {/* Header */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
          <Image
            source={{
              uri: 'https://links.papereact.com/wru',
            }}
            className='h-7 bg-gray-300 p-4 rounded-full'
          />
          <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>Deliver Now</Text>
            <Text className='font-bold text-xl'>
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Serach */}

      <View>
        <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
          <SearchIcon />

          {/* <TextInput placeholder='search' keyboardType='default' />
          <AdjustmentsIcon color='#00CCBB' /> */}
        </View>
      </View>
      </Text>
    </SafeAreaView>
  );
};

export default Home;
