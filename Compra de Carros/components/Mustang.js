import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Tipos() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <View style={estilo.conteudo}>
          <Image
            style={estilo.fotos}
            source={require('../Carros/Mustang/Mfast.jpg')}
          />
          <Text style={estilo.titulo}> Fastback  </Text>
        </View>

        <View style={estilo.conteudo}>
          <Image
            style={estilo.fotos}
            source={require('../Carros/Mustang/MShelby.jpg')}
          />
          <Text style={estilo.titulo}> Shelby GT 350 </Text>
        </View>

        <View style={estilo.conteudo}>
          <Image
            style={estilo.fotos}
            source={require('../Carros/Mustang/Mboss.jpg')}
          />
          <Text style={estilo.titulo}> Boss 429 </Text>
        </View>

        <View style={estilo.conteudo}>
          <Image
            style={estilo.fotos}
            source={require('../Carros/Mustang/Mgt.jpg')}
          />
          <Text style={estilo.titulo}> GT 2010 </Text>
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
