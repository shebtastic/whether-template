import { TodoList as List } from "./TodoList.styled.js";

export default function TodoList({ todos }) {
  return (
    <>
      <h2>Open ToDos</h2>
      <List>{null}</List>
    </>
  );
}
