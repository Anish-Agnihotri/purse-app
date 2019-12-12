import React from 'react';
import { TouchableHighlight, Button, StyleSheet, View, Text, TextInput } from 'react-native';

export default class Register extends React.Component {

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.menu}>
					<TouchableHighlight style={styles.backbutton} onPress={() => this.props.navigation.navigate('GetStarted')} underlayColor="#ebeefa">
						<Text style={styles.backbuttontext}>⇠</Text>
					</TouchableHighlight>
					<Text style={styles.menutext}>Register</Text>
				</View>
				<View style={styles.register}>
					<Text style={styles.registertext}>What is your email?</Text>
					<TextInput style={styles.email} autoCapitalize="none" placeholder="jack@purse.app"/>
					<Text style={styles.registertext}>Choose a strong password:</Text>
					<TextInput secureTextEntry style={styles.password} autoCapitalize="none" placeholder="PaSSwOrd134%$" autoCapitalize="none"/>
					<View style={styles.bottomregister}>
						<TouchableHighlight style={styles.finishregisterbutton} onPress={() => this.props.navigation.navigate('GetStarted')} underlayColor="#ebeefa">
							<Text style={styles.finishregisterbuttontext}>Sign Up</Text>
						</TouchableHighlight>
						<Button title="Already pursed? Login"/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5F6FA',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#000000'
	},
	menu: {
		flex: 1,
		justifyContent: 'center',
		width: '100%',
		height: '17%',
		paddingLeft: '3%'
	},
	menutext: {
		color: '#5467FF',
		fontSize: 43.5,
		fontWeight: 'bold',
		marginTop: '2%'
	},
	backbutton: {
		backgroundColor: '#e9eefb',
		width: '15%',
		alignItems: 'center',
		marginTop: '7%',
		borderRadius: 10
	},
	backbuttontext: {
		fontSize: 30,
		color: '#5467FF'
	},
	register: {
		marginTop: 'auto',
		width: '100%',
		height: '83%',
		backgroundColor: '#FFFFFF',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		paddingLeft: '5%',
		paddingRight: '5%',
		paddingBottom: '5%'
	},
	registertext: {
		fontWeight: '500',
		fontSize: 15.5,
		marginTop: 20,
		marginLeft: 5
	},
	email: {
		backgroundColor: '#F5F6FA',
		borderRadius: 10,
		paddingLeft: 10,
		height: 50
	},
	password: {
		backgroundColor: '#F5F6FA',
		borderRadius: 10,
		paddingLeft: 10,
		height: 50
	},
	bottomregister: {
		marginTop: 'auto'
	},
	finishregisterbutton: {
		backgroundColor: '#5467FF',
		width: '100%',
		height: 50,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	finishregisterbuttontext: {
		color: '#FFF',
		fontWeight: '500',
		fontSize: 18,
	}
});
