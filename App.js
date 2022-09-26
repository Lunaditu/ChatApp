import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [pageIndex, setPage] = useState(0);
  //pageIndex -> 
  // 0 = main page (where all the chats will be shown)
  // 1 = chat page (another variable to store which chat but the main idea is that the chat page will have a default design
  // it might take the chat id as an argument)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title='evet' onPress={() => {setCount(count+1);}}></Button>
      <Text>{count}</Text>
      <Test></Test>
      <StatusBar style="auto" />
    </View>
  );
}


function Test() {
  return (
    <View>
      <Text>TEST</Text>
      <Button title='clickMe'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
