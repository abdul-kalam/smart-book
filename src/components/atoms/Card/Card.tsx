import React from "react";
import { Container } from "./styles";

interface IProps {
  children: JSX.Element[] | JSX.Element;
  selected?: string;
  id?: any;
  onSelected?: (id: any) => void;
}

const Card: React.FC<IProps> = props => {
  const onClick = (e:React.ChangeEvent<HTMLInputElement>)=> {
    let id = e.currentTarget.dataset.id;
    props.onSelected && props.onSelected(id);
  };
  return (
    <Container selected={props.selected || 'false'} data-id={props.id} onClick={onClick}>
      {props?.children}
    </Container>
  );
};

export default Card;
