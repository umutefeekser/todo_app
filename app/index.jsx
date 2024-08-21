import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import TodoItem from '../components/TodoItem';
import Top from '../components/Top';
import Bottom from '../components/Bottom';

export default function Index() {

  const [list, setList] = useState([])
  const [text, setText] = useState("")

  const changeFunc = (text) => setText(text)

  const saveFunc = () => {
    if(text.trim() === "") return Alert.alert("Yapılacak iş bölümü boş bırakılamaz!") || alert("Yapılacak iş bölümü boş bırakılamaz!")
    setList([...list, {
      id: Math.floor(Date.now() + Math.random()),
      title: text.trim()[0].toUpperCase() + text.trim().slice(1),
      completed: false
    }])
    setText("")
  }

  function removeFunc(id){
    setList( 
      list.filter(i => i.id !== id)
    )
  }

  function completedFunc(id){
    setList(
      list.map(i => i.id === id ? {id, title: i.title, completed: !i.completed} : i)
    )
  }

  const renderItem = ({item}) => <TodoItem removeFunc={removeFunc} completedFunc={completedFunc} item={item}/>

  return (
    <View style={styles.container}>

      <Top renderItem={renderItem} list={list}/>

      <Bottom text={text} changeFunc={changeFunc} saveFunc={saveFunc} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#102027',
    justifyContent: 'space-between',
    fontFamily: "Helvetica"
  }
})