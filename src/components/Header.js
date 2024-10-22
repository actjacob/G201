import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

const Header = ({ increment }) => {
  console.log('Header component re-render');

  const arr = new Array(5).fill().map(() => Math.floor(Math.random() * 10));
  return (
    <View style={styles.container}>
      <Text>Header</Text>
      <Text style={{ height: 100 }}>{JSON.stringify(arr)} </Text>
      <Button title="Arttır" onPress={() => increment(5)} />
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
