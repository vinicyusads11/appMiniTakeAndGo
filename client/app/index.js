//* ARQUIVO PARA CONFIGURAR ROTA INICIAL
import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="/screens/Welcome" />;
}