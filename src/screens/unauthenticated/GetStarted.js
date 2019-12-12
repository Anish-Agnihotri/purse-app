import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';

export default class GetStarted extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				<Text>Test</Text>
				<View style={styles.actionbar}>
					<TouchableHighlight style={styles.startbutton} onPress={() => this.props.navigation.navigate('Register')} underlayColor="#808eff">
						<Text style={styles.startbuttontext}>Get started</Text>
					</TouchableHighlight>
					<Text style={styles.version}>Purse v0.0.1b | All rights reserved</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5F6FA',
		alignItems: 'center',
		justifyContent: 'center',
	},
	actionbar: {
		backgroundColor: '#FFFFFF',
		width: '100%',
		height: 125,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		marginTop: 'auto',
		alignItems: 'center',
		paddingTop: '5%'
	},
	startbutton: {
		backgroundColor: '#5467FF',
		width: '90%',
		height: '65%',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	startbuttontext: {
		color: '#FFFFFF',
		fontWeight: '500',
		fontSize: 22,
	},
	version: {
		marginTop: '2%',
		fontSize: 12,
		color: '#ccc'
	}
});
