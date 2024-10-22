import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = ({ count }) => {
  console.log('Header component re-render');

  const arr = new Array(count).fill().map(() => Math.floor(Math.random() * 10));
  return (
    <View style={styles.container}>
      <Text>Header</Text>
      <Text>{JSON.stringify(arr)} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
    borderBottomWidth: 2,
    paddingBottom: 10,
    alignItems: 'center'
  }
});

export default React.memo(Header);
