import { TouchableOpacity, Text, Image } from "react-native";
import checkImg from "../../assets/check.png";
import { s } from "./Card.style";

export function CardTodo({ todo,onPress,onLongPress}) {
  return (
    <TouchableOpacity onLongPress={() => onLongPress(todo)} onPress={()=>onPress(todo)} style={s.card}>
       <Text
        style={[
          s.text,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {" "}
        {todo.title}
      </Text>
      {todo.isCompleted && <Image style={s.img} source={checkImg} />}
    </TouchableOpacity>
  );
}
