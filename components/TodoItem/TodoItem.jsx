import { TouchableOpacity } from 'react-native';
import styles from './TodoItem.style';

const TodoItem = ({item, completedFunc, removeFunc}) => {

  return (
    <TouchableOpacity
      onPress={() => completedFunc(item.id)}
      style={{
        ...styles.container,
        textDecoration: item.completed && "line-through",
        backgroundColor: item.completed ? "#37474f" : "#7da453",
        color: item.completed ? "gray" : "white"
      }}
      onLongPress={() => removeFunc(item.id)}>

        {item.title}

    </TouchableOpacity>
  )
}

export default TodoItem