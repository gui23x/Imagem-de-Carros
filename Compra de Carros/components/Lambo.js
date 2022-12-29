import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';

export default function Tipos() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      <View style={estilo.container}>
        <View style={estilo.conteudo}>
          <Image
            style={estilo.fotos}
            source={require('../Carros/Lamborghini/Lcinza.jpg')}
          />
          <Text style={estilo.titulo}> Huracan </Text>

        </View>

        <View style={estilo.conteudo}>
          <Image
            style={estilo.fotos}
            source={require('../Carros/Lamborghini/Lurus.jpg')}
          />
          <Text style={estilo.titulo}> Urus </Text>

         
        </View>

        <View style={estilo.conteudo}>
          <Image
            style={estilo.fotos}
            source={require('../Carros/Lamborghini/Lgallardo.jpg')}
          />
          <Text style={estilo.titulo}> Gallardo </Text>

          
        </View>

        <View style={estilo.conteudo}>
          <Image
            style={estilo.fotos}
            source={require('../Carros/Lamborghini/Lveneno.jpg')}
          />
          <Text style={estilo.titulo}> Veneno </Text>

         
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    marginHorizontal: 15,
    textAlign: 'center',
     margin: 10,
    padding: 10,
  },
  fotos: {
    width: 323,
    height: 270,
    marginHorizontal: 15,
    margin: 15,
    textAlign: 'center',
    borderRadius: 50,
  },
  conteudo: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});

