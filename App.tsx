/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Clipboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const [wallpaper, setWallpaper] = useState('#ffffff');
  const [colorName, setColorName] = useState('');

  const copyToClipboard = async () => {
    await Clipboard.setString(colorName);
    // Alert('Color code copied to clipboard!');
  };
  const Pessfunc = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setWallpaper(color);
    setColorName(color);
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: wallpaper}]}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity style={styles.Btn} onPress={Pessfunc}>
        <View>
          <Text style={styles.Textbtn}>Hello, world!</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.colorText} onPress={copyToClipboard}>
        <Text style={styles.colorTextStyle}>{colorName}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textbtn: {
    color: '#000000',
    fontWeight: 'bold',
  },
  Btn: {
    backgroundColor: '#ffffff',
    width: 200,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorText: {
    margin: 20,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 5,
    padding: 8,
    borderStyle: 'solid',
  },
  colorTextStyle: {
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default App;
