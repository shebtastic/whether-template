import ListItem from "../ListItem/index.js";
import { TodoList as List } from "./TodoList.styled.js";

export default function TodoList({ todos }) {
  return (
    <>
      <h2>Open ToDos ({todos.length})</h2>
      <List>
        {todos.map((todo) => {
          return <ListItem todo={todo}></ListItem>;
        })}
      </List>
    </>
  );
}
