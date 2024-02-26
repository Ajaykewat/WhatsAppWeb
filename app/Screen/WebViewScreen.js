import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const height = Dimensions.get( "window" ).height;
const width = Dimensions.get( "window" ).width;

const WebViewScreen = () => {
  
  return (
    <View style={styles.container}>
    <MyWebComponent />
    </View>
  )
};

const MyWebComponent = () => {
  const desktopUserAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36';
  return (
    <WebView source={{uri: 'https://web.whatsapp.com/'}} 
    style={styles.webview}
    userAgent={desktopUserAgent}
     />
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
