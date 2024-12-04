import { Checkbox, CheckboxProps, Modal, ModalProps, Select } from 'antd';
import styled from '@emotion/styled';
import theme from 'theme/theme';

//index
export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${theme.fontSize.h1};
  font-weight: bold;
  color: ${theme.color.Text1};
  text-align: center;
  margin-bottom: 25px;
`;

export const FilterContainer = styled.div`
  min-width: 300px;
  width: 100%;
  max-width: 790px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const AddButton = styled.button`
  padding: 10px 25px;
  background-color: ${theme.color.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: ${theme.fontSize.base};
  font-weight: ${theme.fontWeight.medium};
  height: 38px;
  width: 120px;
`;

export const StyledSelect = styled(Select)`
  min-width: 165px;
  height: 38px;

  :where(.css-dev-only-do-not-override-1wwf28x).ant-select-outlined:not(
      .ant-select-customize-input
    )
    .ant-select-selector {
    background: ${theme.color.white3};
  }
`;

export const TaskListContainer = styled.div`
  min-width: 300px;
  width: 100%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  background: ${theme.color.white2};
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const TaskContent = styled.div`
  flex: 1;
`;

export const TaskText = styled.p<{ completed: boolean }>`
  color: ${(props) =>
    props.completed ? theme.color.black50 : theme.color.black100};
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  margin: 0;
`;

export const TaskTime = styled.span`
  font-size: ${theme.fontSize.body1};
  color: ${theme.color.black75};
  display: block;
  margin-top: 5px;
`;

export const ActionButton = styled.button`
  padding: 5px;
  background: ${theme.color.white2};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCheckbox = styled(Checkbox)<CheckboxProps>`
  :where(.css-dev-only-do-not-override-1wwf28x)
    .ant-checkbox
    .ant-checkbox-inner {
    width: 20px !important;
    height: 20px !important;
    background-color: ${theme.color.white2} !important;
  }

  :where(.css-dev-only-do-not-override-1wwf28x)
    .ant-checkbox-checked
    .ant-checkbox-inner {
    background-color: ${theme.color.primary} !important;
    border-color: ${theme.color.primary} !important;
  }
`;

//AddModal

export const StyledModal = styled(Modal)<ModalProps>`
  .ant-modal-header {
    margin-bottom: 15px !important;
  }
  .ant-modal-footer {
    margin-top: 17px !important;
    text-align: center !important;
  }
`;
