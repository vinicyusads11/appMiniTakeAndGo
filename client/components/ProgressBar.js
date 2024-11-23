import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const ProgressBar = ({ step }) => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: (step - 1) * 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [step]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.progress,
          {
            width: progressAnim.interpolate({
              inputRange: [0, 100, 200],
              outputRange: ['0%', '50%', '100%'],
            }),
          },
        ]}
      />
      <View style={styles.indicatorContainer}>
        <View style={[styles.indicator, step >= 1 && styles.indicatorActive]} />
        <View style={[styles.indicator, step >= 2 && styles.indicatorActive]} />
        <View style={[styles.indicator, step >= 3 && styles.indicatorActive]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: '80%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 30,
    alignSelf: 'center',
  },
  progress: {
    height: '100%',
    backgroundColor: '#3cb3f6',
    borderRadius: 5,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: -15,
    width: '100%',
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#e0e0e0',
  },
  indicatorActive: {
    backgroundColor: '#3cb3f6',
  },
});

export default ProgressBar;
