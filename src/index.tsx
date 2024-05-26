import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ProductTree} from './components';
import {data} from './data';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <ProductTree data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
