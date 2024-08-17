import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const produtos = [
  { id: 1, nome: "Coca Cola", preco: 5.5 },
  { id: 2, nome: "Pepsi", preco: 5.5 },
  { id: 3, nome: "Fanta", preco: 5.5 },
  { id: 4, nome: "Guaraná", preco: 5.5 },
];

export default function Index() {
  let[contador, setContador]=useState(0)
  return (
    <View
      style={estilo.container}
    >
      {produtos.map((p)=> (
        <view>
        <Text style={estilo.titulo}>{p.nome} </Text>
        <Text style={estilo.text}>{p.preco}</Text>
        </view>
        ) )}
        <Button title={contador.toString()} onPress={(clicarBotao)} >
        </Button>

        
    </View>
  );
  function clicarBotao() {
    setContador(contador+1);
    }
}


const estilo= StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#000000"
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold"
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  botao:{
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
});