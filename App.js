import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
// import { TouchableOpacity } from 'react-native-web';
// import twrnc from "tailwind-react-native-classnames";
import * as ImagePicker from "expo-image-picker";

export default function App() {

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
		<View style={styles.container}>
			<View style={styles.box}>
				<Text style={styles.text}>Imagen React Native</Text>
					<Button title="Cambiar Foto" onPress={pickImage} />
					{image && (
						<Image
							source={{ uri: image }}
							style={{ width: 200, height: 200 }}
						/>
					)}
				
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		backgroundColor: "pink",
	},
	top: {
		flex: 0.3,
		backgroundColor: "grey",
		borderWidth: 5,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},

	text: {
		fontSize: 20,
		color: "black",
		padding: 20
	},

	image: {
		width: 200,
		height: 200,
		resizeMode: "contain",
		overflow: "hidden",
	},
	box: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
