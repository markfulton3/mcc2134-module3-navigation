import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';


const HomeScreen = ({navigation}) => {
  const [text, onChangeText] = useState('');

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <TextInput 
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='Enter Text Here'
            />
            <Button 
            onPress={() => {  navigation.navigate("Details") } }
            title="Go to Details Screen"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
            <Text>Value: {text}</Text>
      </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });