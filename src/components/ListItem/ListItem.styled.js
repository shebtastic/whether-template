import styled from "styled-components";

const weatherColor = {
  good: "yellow",
  bad: "blue",
  always: "green",
};

const ListItem = styled.li`
  background-color: ${({ todo }) =>
    todo.weather === "good"
      ? weatherColor.good
      : todo.weather === "bad"
      ? weatherColor.bad
      : weatherColor.always};
`;

export { ListItem };
