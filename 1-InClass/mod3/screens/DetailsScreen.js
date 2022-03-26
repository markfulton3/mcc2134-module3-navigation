import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';


const DetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            
            <Button 
            onPress={() => {navigation.navigate("Home")}}
            title="Go back Home"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
      </View>
    );
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });