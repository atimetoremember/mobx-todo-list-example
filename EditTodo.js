import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const EditTodo = (props) => {
  const {setModalAppearance, todo, setTodo, saveTodo} = props;
  return (
    <Modal animationType="fade" visible={true} transparent>
      <View style={styles.container}>
        <View style={styles.viewModal}>
          <View style={styles.viewTitle}>
            <Text style={styles.textTitle}>Edit task</Text>
          </View>
          <View style={{marginTop: 10}}>
            <TextInput
              style={styles.input}
              placeholder="Task..."
              value={todo.name}
              onChangeText={(text) => setTodo({...todo, name: text})}
            />
            <View style={{marginTop: 15, marginBottom: 20}}>
              <TouchableOpacity onPress={() => saveTodo()}>
                <View style={[styles.btn, {backgroundColor: 'blue'}]}>
                  <Text style={styles.textTitle}>Ok</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalAppearance(false)}>
                <View style={[styles.btn, {backgroundColor: 'red'}]}>
                  <Text style={styles.textTitle}>Cancel</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  viewTitle: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  viewModal: {
    borderRadius: 4,
    backgroundColor: 'white',
    width: '90%',
  },
  input: {
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
    fontSize: 18,
    color: 'black',
    marginHorizontal: 20,
    height: 40,
  },
  btn: {
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 30,
    marginTop: 15,
  },
});

export default EditTodo;
