import { useState } from 'react';
import binIcon from '@assets/bin-svgrepo-com.svg';
import pencilIcon from '@assets/pencil-svgrepo-com.svg';
import {
  ActionButton,
  AddButton,
  Container,
  FilterContainer,
  StyledCheckbox,
  StyledSelect,
  TaskContent,
  TaskItem,
  TaskList,
  TaskListContainer,
  TaskText,
  TaskTime,
  Title,
} from './styles';
import { ITodoData } from '@utils/interface';
import AddModal from './AddModal';

const mockData = [
  {
    id: '1',
    text: 'Create a react project 🤔',
    time: '5:23 AM, 01/06/2022',
    completed: false,
  },
  {
    id: '2',
    text: 'Learn React ❤️',
    time: '5:22 AM, 01/06/2022',
    completed: false,
  },
  {
    id: '3',
    text: 'Create a Todo App 💫',
    time: '5:21 AM, 01/06/2022',
    completed: true,
  },
];

const TodoListPage = () => {
  const [todoList, setTodoList] = useState<ITodoData[]>(mockData);
  const [filter, setFilter] = useState('all');
  const FilterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Completed todoList', value: 'completed' },
    { label: 'Incomplete todoList', value: 'incomplete' },
  ];
  const [addModal, setAddModal] = useState(false);
  const [record, setRecord] = useState<ITodoData>();

  const toggleTask = (id: string) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const filteredTasks = todoList.filter((task) => {
    if (filter === 'incomplete') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  console.log('todoList', todoList);

  return (
    <Container>
      <Title>TODO LIST</Title>

      <FilterContainer>
        <AddButton onClick={() => setAddModal(true)}>Add Task</AddButton>
        <StyledSelect
          options={FilterOptions}
          value={filter}
          onChange={(e) => setFilter(String(e))}
        />
      </FilterContainer>

      <TaskListContainer>
        <TaskList>
          {filteredTasks.map((task) => (
            <TaskItem key={task.id}>
              <StyledCheckbox
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <TaskContent>
                <TaskText completed={task.completed}>{task.text}</TaskText>
                <TaskTime>{task.time}</TaskTime>
              </TaskContent>

              <ActionButton onClick={() => deleteTask(task.id)}>
                <img src={binIcon} width={20} height={20} />
              </ActionButton>
              <ActionButton
                onClick={() => {
                  setRecord(task);
                  setAddModal(true);
                }}
              >
                <img src={pencilIcon} width={20} height={20} />
              </ActionButton>
            </TaskItem>
          ))}
        </TaskList>
      </TaskListContainer>

      <AddModal
        open={addModal}
        setOpen={setAddModal}
        setTodoList={setTodoList}
        record={record}
        setRecord={setRecord}
      />
    </Container>
  );
};

export default TodoListPage;
