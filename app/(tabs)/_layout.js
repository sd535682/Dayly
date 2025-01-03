import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Octicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.dark,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color: _ }) => <Octicons size={22} name="home" color="black" />
        }}
      />
      <Tabs.Screen
        name="addmood"
        options={{
          title: 'Add Mood',
          tabBarIcon: ({ color: _ }) => <MaterialIcons name="add" size={24} color="black" />
        }}
      />
    </Tabs>
  );
}
