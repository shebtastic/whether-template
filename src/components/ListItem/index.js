import { ListItem as TestItem } from "./ListItem.styled";

export default function ListItem({ todo }) {
  return (
    <>
      <TestItem todo={todo}>{todo.title}</TestItem>
    </>
  );
}
