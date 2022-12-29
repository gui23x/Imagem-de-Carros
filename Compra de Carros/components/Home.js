import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';

export default function Home(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={estilo.container}>
      <ImageBackground
        style={estilo.image}
        resizeMode="cover"
        source={require('../Carros/capa.jpeg')}></ImageBackground>

      <Text style={estilo.titulo}>Bem Vindo a loja de Carros!! </Text>

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => {
          props.navigation.navigate('Tipos');
        }}>
        <Text style={estilo.textobotao}> Acessar </Text>
      </TouchableOpacity>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Sobre</Text>
            <Text style={styles.modalText}>
              Um aplicativo onde você encontra vário carros de diferentes tipos
              para vizualizar as imagens e até comprar.
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Sobre</Text>
      </Pressable>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 500,
    height: 900,
  },
  botao: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: 200,
    height: 80,
    bottom: 300,
    left: 0,
    right: 0,
    borderColor: 'white',
    
    
  },
  textobotao: {
    fontSize: 20,
    textAlign: 'center',
    top: 15,
    color: 'white',
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    bottom: 350,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: 200,
    height: 80,
    bottom: 300,
    left: 0,
    right: 0,
    borderColor: 'white',
  },
  buttonOpen: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  buttonClose: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    top: 0,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    top: 15,
    color: 'white',
  },
  modalText: {
    textAlign: 'center',
  },
});
