import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.aplicativo}>
      <Image
        style={styles.imagem}
        source={{uri: 'http://gsxbr.net/GraffiteOnline/Imagens/LogoGO.png'}}
      />
      <br />
      <p>O que você deseja acessar?</p>
      <br />
      <Image
        style={styles.botao}
        source={{uri: 'http://gsxbr.net/GraffiteOnline/Imagens/iconeBoletim.png'}}
      />
      <br />
      <Image
        style={styles.botao}
        source={{uri: 'http://gsxbr.net/GraffiteOnline/Imagens/iconeFormRenov.png'}}
      />
      <br />
      <Image
        style={styles.botao}
        source={{uri: 'http://gsxbr.net/GraffiteOnline/Imagens/iconeFormAuth.png'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagem: {
    width: 164,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aplicativo: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;