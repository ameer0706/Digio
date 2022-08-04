import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {changeRoute} from './../../store/action/Common';

const MyScreen = () => {
  const {count} = useSelector(state => state.common);
  const dispatch = useDispatch();
  useEffect(() => {}, [count]);
  const countAction = actionType => {
    if (actionType == 'increase') {
      dispatch(changeRoute(count + 1));
    } else if (actionType == 'decrease') {
      dispatch(changeRoute(count - 1));
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topSectionStye}>
        <TouchableOpacity
          onPress={() => countAction('increase')}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>+1</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centerSection}>
        <Text style={styles.counterStyle}>{count}</Text>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity
          disabled={count == 0}
          onPress={() => countAction('decrease')}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>-1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004761',
  },
  centerSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topSectionStye: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    // justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#fff',
    borderRadius: 7,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  textStyle: {
    color: '#4f4f4f',
    fontWeight: '800',
    fontSize: 17,
  },
  counterStyle: {
    fontSize: 36,
    color: '#8cd6bd',
    fontWeight: 'bold',
  },
});
