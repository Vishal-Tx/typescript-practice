import React, {
  Children,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./App.css";
import axios from "axios";
import Button from "./components/Button";
import { useTodos } from "./useTodos";

type heading = {
  title: string;
};

const Heading = ({ title }: heading) => {
  return <h1>{title}</h1>;
};

const useValue = (initialValue: number) => useState<number>(initialValue);

type UseNumberValue = ReturnType<typeof useValue>;

const Box: React.FC<PropsWithChildren> = ({ children }) => {
  return <div style={{ color: "brown" }}>{children}</div>;
};

// const Button:React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>&{title?:string}>=({children,style, title, ...rest})=>(
// <button {...rest} style={{...style, backgroundColor:"red"}}>{title ?? children}</button>
// )

const List: React.FC<{ items: string[]; onClick?: (item: string) => void }> = ({
  items,
  onClick,
}) => (
  <ul>
    {items.map((item, index) => (
      <li key={index} onClick={() => onClick?.(item)}>
        {item}
      </li>
    ))}
  </ul>
);
const IncrementFunc: React.FC<{
  value: UseNumberValue[0];
  setvalue: UseNumberValue[1];
}> = ({ value, setvalue }) => {
  return (
    <>
      <Button
        onClick={() => setvalue(value + 1)}
        style={{ color: "white" }}
        title={`Add-${value}`}
      />
    </>
  );
};

interface Payload {
  text: string;
}

function UL<T>({
  items,
  render,
  itemClick,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  items: T[];
  render: (item: T) => React.ReactNode;
  itemClick: (item: T) => void;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li onClick={() => itemClick(item)} key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  );
}

const App = () => {
  const { addTodo, removeTodo, todos } = useTodos([
    { id: 0, text: "Hello there", done: false },
  ]);
  const [payload, setPayload] = useState<Payload | null>(null);

  useEffect(() => {
    axios.get("/data.json").then(({ data }) => setPayload(data));
  }, []);

  const onListClick = useCallback((item: string) => {
    alert(item);
  }, []);

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onaddTodo = useCallback(() => {
    if (newTodoRef.current) {
      addTodo(newTodoRef.current.value);
      newTodoRef.current.value = "";
    } else return;
  }, [addTodo]);

  const [value, setvalue] = useValue(0);

  return (
    <div>
      <Heading title="Hello" />
      <Box>Hello there</Box>
      <List items={["1", "2", "3"]} onClick={onListClick} />
      <Box>{JSON.stringify(payload)}</Box>
      <Heading title="Todos" />
      <UL
        items={todos}
        itemClick={(item) => alert(item.id)}
        render={(todo) => (
          <>
            {todo.text}
            <Button onClick={() => removeTodo(todo.id)} title={"remove"} />
          </>
        )}
      />
      {/* {todos.map(todo=>( 
      <div key = {todo.id}>
        {todo.text}
        <Button onClick={()=>removeTodo(todo.id)} title={"remove"}/>
      </div>
    ))} */}
      <div>
        <input type="text" ref={newTodoRef} />
        <Button onClick={onaddTodo} title={"add"} />
      </div>
      <IncrementFunc value={value} setvalue={setvalue} />
    </div>
  );
};

export default App;
