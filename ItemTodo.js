import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
const ItemTodo = (props) => {
  const {todo, removeAction, editAction} = props;
  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.textTitle}>{todo.name}</Text>
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 8}}>
          <TouchableOpacity onPress={() => editAction(todo)}>
            <View style={[styles.btn, {backgroundColor: 'blue'}]}>
              <Text style={styles.text}>Edit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeAction(todo.id)}>
            <View style={[styles.btn, {backgroundColor: 'red'}]}>
              <Text style={styles.text}>Remove</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingLeft: 16,
    backgroundColor: 'pink',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
  },
  btn: {
    borderRadius: 4,
    height: 40,
    alignSelf: 'baseline',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  textTitle: {
    fontSize: 16,
  },
});

export default ItemTodo;
