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

export default function Tipos(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      <View style={estilo.container}>
        <View style={estilo.conteudo}>
          <Image
            style={estilo.fotos}
            source={require('../Carros/Lamborghini/Lcinza.jpg')}
          />
          <Text style={estilo.titulo}> Lamborghini </Text>

          <TouchableOpacity
            style={estilo.botao}
            onPress={() => {
              props.navigation.navigate('Lamborghini');
            }}>
            <Text style={estilo.textobotao}> Modelos </Text>
          </TouchableOpacity>
        </View>

        <View style={estilo.conteudo}>
          <Image
            style={estilo.fotos}
            source={require('../Carros/Camaro/Claranja.jpg')}
          />
          <Text style={estilo.titulo}> Camaro </Text>

          <TouchableOpacity
            style={estilo.botao}
            onPress={() => {
              props.navigation.navigate('Camaro');
            }}>
            <Text style={estilo.textobotao}> Modelos </Text>
          </TouchableOpacity>
        </View>

        <View style={estilo.conteudo}>
          <Image
            style={estilo.fotos}
            source={require('../Carros/Ford/Fazul.jpg')}
          />
          <Text style={estilo.titulo}> Ford </Text>

          <TouchableOpacity
            style={estilo.botao}
            onPress={() => {
              props.navigation.navigate('Ford');
            }}>
            <Text style={estilo.textobotao}> Modelos </Text>
          </TouchableOpacity>
        </View>

        <View style={estilo.conteudo}>
          <Image
            style={estilo.fotos}
            source={require('../Carros/Mustang/Mpreto.jpg')}
          />
          <Text style={estilo.titulo}> Mustang </Text>

          <TouchableOpacity
            style={estilo.botao}
            onPress={() => {
              props.navigation.navigate('Mustang');
            }}>
            <Text style={estilo.textobotao}> Modelos </Text>
          </TouchableOpacity>
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
    fontSize: 20,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  fotos: {
    width: 323,
    height: 270,
    marginHorizontal: 15,
    margin: 15,
    textAlign: 'center',
    borderRadius: 50,
  },
  botao: {
    top: 0,
    margin: 10,
    padding: 10,
    borderRadius: 20,
    width: 200,
    height: 80,
    bottom: 300,
    backgroundColor: 'white',
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  textobotao: {
    fontSize: 20,
    textAlign: 'center',
    top: 15,
    color: 'black',
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    width: 200,
    height: 80,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  buttonOpen: {
    backgroundColor: 'white',
  },
  buttonClose: {
    backgroundColor: 'white',
    top: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    top: 15,
  },
  modalText: {
    textAlign: 'center',
  },
});
