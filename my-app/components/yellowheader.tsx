// components/YellowHeader.tsx USE 
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

interface Props {
  title: string;
}

const YellowHeader: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: '#F1C40F' }}>
      
      <StatusBar style="dark" backgroundColor="#F1C40F" />

      <View
        style={{
          paddingTop: 50,
          paddingBottom: 15,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 2,
          elevation: 5,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 20,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default YellowHeader;
