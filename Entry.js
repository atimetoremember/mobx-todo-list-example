/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ItemTodo from './ItemTodo';
import {observer, inject} from 'mobx-react';
import EditTodo from './EditTodo';
const Entry = (props) => {
  const {todoState} = props;
  console.log(todoState);
  const onPress = () => {
    todoState.addTask('New task added');
  };
  const [isShowModal, setShowModal] = useState(false);
  const [todo, setTodo] = useState({});
  const setModalAppearance = (appearance) => {
    setShowModal(appearance);
  };
  const editAction = (todo) => {
    setModalAppearance(true);
    setTodo(todo);
  };
  const saveTodo = () => {
    todoState.updateTask(todo.id, todo.name);
    setModalAppearance(false);
  };
  const removeAction = (idTask) => {
    todoState.removeTask(idTask);
  };
  return (
    <SafeAreaView style={{flex: 1, marginTop: 10}}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.btn}>
          <Text style={styles.text}>Add more</Text>
        </View>
      </TouchableOpacity>
      <View style={{marginTop: 20, flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={todoState.list}
          renderItem={({item, index}) => (
            <ItemTodo
              todo={item}
              editAction={editAction}
              removeAction={removeAction}
            />
          )}
          keyExtractor={(item) => item.id + ''}
          ItemSeparatorComponent={() => <View style={{height: 15}} />}
        />
      </View>
      {isShowModal && (
        <EditTodo
          todo={todo}
          setModalAppearance={setModalAppearance}
          setTodo={setTodo}
          saveTodo={saveTodo}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

export default inject('todoState')(observer(Entry));
