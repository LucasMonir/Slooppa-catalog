import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import Slooppa from './components/Slooppa';

let itens = [
  { name: 'Tamanduá Bandeira', url: 'https://twpark.com/wp-content/uploads/2021/09/amara-1.jpeg' }
  , { name: 'Tamanduá Mirim', url: 'https://olharturistico.com.br/wp-content/uploads/2013/07/tamandua-mirim.jpg' }
  , { name: 'Tamanduaí', url: 'https://i.pinimg.com/736x/6c/26/ed/6c26edb90dacf53ac479e949cdaf9ea2.jpg' }
]
let bgImage = { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Morro_cabeludo_-_Parque_dos_Pireneus_-_Piren%C3%B3polis_-_Goi%C3%A1s_01.jpg/1200px-Morro_cabeludo_-_Parque_dos_Pireneus_-_Piren%C3%B3polis_-_Goi%C3%A1s_01.jpg' }

export default function App() {
  return (
    <View>
      <ImageBackground source={bgImage} resizeMode="cover">
        <ScrollView>
          <Text style={{ textAlign: 'center', marginTop: 50, color: 'white' }}>
            Slooppa Catalog
          </Text>

          {itens.map((x, y) => <Slooppa key={y} props={{ name: x.name, url: x.url }}></Slooppa>)}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});