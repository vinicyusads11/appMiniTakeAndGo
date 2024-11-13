import { Tabs } from 'expo-router';
import { FontAwesome, SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#121212',
          height: 65,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          color: '#FFF',
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarActiveTintColor: '#3cb3f6',
        tabBarInactiveTintColor: '#888',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="home" color={color} size={32} />;
          },
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          title: 'Cesta',
          tabBarIcon: ({ color, size }) => {
            return <SimpleLineIcons name="bag" color={color} size={27} />;
          },
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contato',
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="support-agent" color={color} size={32} />;
          },
        }}
      />
    </Tabs>
  );
}
