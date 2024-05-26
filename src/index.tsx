import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Colors, useCommonStyle} from './theme';
import {ProductTree} from './components';
import {data} from './data';

const App = () => {
  const styles = useCommonStyle();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.wildSand} />
      <ProductTree data={data} />
    </SafeAreaView>
  );
};

export default App;
