import { View, Text, TextInput, SafeAreaView, Image, ScrollView } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import Catagories from '../components/Catagories';

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
      <Text className='text-red-500'>
        {/* Header */}
        <View className='flex flex-row pb-3 items-center mx-4 space-x-2 px-2'>
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
              <ChevronDownIcon size={20} color='#00CCBB' />
            </Text>
          </View>

          <UserIcon size={35} color='#00CCBB' />
        </View>

        {/* Serach */}

        <View className="flex-row items-center space-x-2 pb-2 mx-4 w-full">
          <View className='flex flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center'>
            <AntIcon name='search1' color='gray' size={20} />
            <TextInput placeholder='Restaurent and foods' keyboardType='default' />
          </View>
          <EntypoIcon name='sound-mix' size={30} color='#00CCBB' />
        </View>

        <ScrollView className='bg-gray-100' contentContainerStyle={{
          paddingBottom: '100px'
        }}>
          {/* Categories */}

          <Catagories />
        </ScrollView>
      </Text>
    </SafeAreaView>
  );
};

export default Home;
