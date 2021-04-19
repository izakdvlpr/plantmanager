import React from 'react';
import { Image, Text, SafeAreaView, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';

import { Button } from '../components/Button';

import { colors } from '../styles/colors';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie{'\n'}
        suas plantas{'\n'}
        de forma fácil
      </Text>

      <Image source={wateringImg} style={styles.image} />

      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <Button title=">" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 38,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
  },
  image: {
    width: 230,
    height: 230,
  },
  subTitle: {
    paddingHorizontal: 20,
    fontSize: 18,
    textAlign: 'center',
    color: colors.heading,
  },
});
