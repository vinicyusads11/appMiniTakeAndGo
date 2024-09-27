import { Tabs } from 'expo-router';
import { FontAwesome, SimpleLineIcons, AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#121212',
        },
        headerTintColor: '#FFF',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Início',
          tabBarIcon: ({}) => {
            return <FontAwesome name="home" color={'#3cb3f6'} size={30} />;
          },
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          title: 'Cesta',
          tabBarIcon: ({}) => {
            return <SimpleLineIcons name="bag" color={'#3cb3f6'} size={25} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({}) => {
            return <AntDesign name="user" color={'#3cb3f6'} size={28} />;
          },
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contato',
          tabBarIcon: ({}) => {
            return <MaterialIcons name="support-agent" color={'#3cb3f6'} size={30} />;
          },
        }}
      />
    </Tabs>
  );
}
