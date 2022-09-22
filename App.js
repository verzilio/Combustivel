import  React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';

export default function App() {
  const [alcool, setAlcool] = useState("2.19");
  const [gasolina, setGasolina] = useState("3.35");
  const [resultado, setResultado] = useState();
	function dividir (){
	  let r = alcool / gasolina;
		if(r<=0.7){
			setResultado(<Text>Vantajoso abastecer com álcool</Text>);
		}else{
			setResultado(<Text>Vantajoso abastecer com gasolina</Text>);
		}
	}
  return (
    <View style={styles.container}>
		  <View style={styles.bloco}>
		  	<Text style={styles.titulo}>Calculo de Combustível</Text>
		  </View>
		  <br></br>
		  <View style={styles.bloco}>
		  	<Text> Álcool </Text>
			 <TextInput 
				 style={styles.input}
				 value={alcool}
				 onChangeText={(valor)=>setAlcool(valor)}
			/>
		  </View>
		  <br></br>
		  <View style={styles.bloco}>
		  	<Text> Gasolina: </Text>
			<TextInput 
				style={styles.input}
				value={gasolina}
				onChangeText={(valor)=>setGasolina(valor)}
			/>
		  </View>
		  <br></br>
		  <View style={styles.bloco}>
			  <Text style={styles.titulo}>
			  	 Resultado: {resultado}
			  </Text>
		  </View>
		  <br></br>
		  <View>
		  	<TouchableOpacity 
				style={styles.botao}
				onPress={dividir}	
			>
				<Text style={styles.textoBotao}>Resultado</Text>  
			</TouchableOpacity>
		  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	  margin: 20
	  
  },
	bloco: {
		margintop: 20,
	},
	titulo: {
		
		fontSize: 30,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	input: {
		borderWidth:2,
		fontSize: 20,
		borderRadius: 5
	},
	botao: {
		backgroundColor:'#40E7',
		borderRadius:20,
		width: 200,
		marginLeft: 60
	},
	textoBotao: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20
	}
	
});