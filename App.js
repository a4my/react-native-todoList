import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Keyboard,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import Task from './components/Task'
import {} from 'react-native'

export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = index => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => completeTask(index)}>
                <Task text={item}></Task>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={'Add a task'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity
          onPress={() => {
            handleAddTask()
          }}
        >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c698d'
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    borderRadius: 60,
    backgroundColor: '#fff',
    borderWidth: 1,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    elevation: 50,
    fontSize: 18,
    color: '#2c698d'
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    elevation: 50
  },
  addText: {
    fontSize: 30,
    color: '#2c698d'
  }
})
