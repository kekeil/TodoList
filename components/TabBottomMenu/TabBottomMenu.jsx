import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./TabBottomMenu.style";

export function TabBottomMenu({ selectedTabName, onPress,todoList }) {

    const countByStatus = todoList.reduce(
        (acc, todo) => {
          todo.isCompleted ? acc.done++ : acc.inProgress++;
          return acc;
        },
        { all: todoList.length, inProgress: 0, done: 0 }
      );
    
  function getTextStyle(tabName) {
    return {
      fontWeight: "bold",
      color: tabName === selectedTabName ? "#2F76E5" : "black",
    };
  }

  return (
    <>
      <View style={s.menu}>
        <TouchableOpacity onPress={() => onPress("Tout")}>
          <Text style={getTextStyle("Tout")}>Tout ({countByStatus.all})</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress("En cours")}>
          <Text style={getTextStyle("En cours")}>En cours ({countByStatus.inProgress})</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress("Terminées")}>
          <Text style={getTextStyle("Terminées")}>Terminées ({countByStatus.done})</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
