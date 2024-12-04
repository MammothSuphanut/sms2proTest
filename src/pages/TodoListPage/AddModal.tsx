import { Input } from 'antd';
import { StyledModal } from './styles';
import { ITodoData } from '@utils/interface';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTodoList: React.Dispatch<React.SetStateAction<ITodoData[]>>;
  record?: ITodoData | undefined;
  setRecord?: React.Dispatch<React.SetStateAction<ITodoData | undefined>>;
}

const AddModal = ({ open, setOpen, setTodoList, record, setRecord }: Props) => {
  const [text, setText] = useState<string>();

  useEffect(() => {
    if (record) {
      setText(record?.text);
    }
  }, [record]);

  const onClose = () => {
    setOpen(false);
    setText(undefined);
    setRecord?.(undefined);
  };

  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 5);
    return `${timestamp}-${randomStr}`;
  };

  const onFinish = () => {
    setTodoList((prevList) => {
      if (record) {
        return prevList.map((todo) =>
          todo.id === record.id
            ? {
                ...todo,
                text: text || '',
                time: dayjs().format('h:mm A, DD/MM/YYYY'),
              }
            : todo,
        );
      } else {
        return [
          ...prevList,
          {
            id: generateUniqueId(),
            text: text || '',
            time: dayjs().format('h:mm A, DD/MM/YYYY'),
            completed: false,
          },
        ];
      }
    });
    onClose();
  };

  return (
    <StyledModal
      title={record ? 'Edit Task' : 'Add Task'}
      onOk={onFinish}
      open={open}
      onCancel={onClose}
    >
      <Input
        value={text}
        onPressEnter={onFinish}
        onChange={(e) => setText(e.target.value)}
      />
    </StyledModal>
  );
};

export default AddModal;
