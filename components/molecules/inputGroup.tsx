import React, {ReactNode } from 'react';
import Label from '../atoms/label';

type props = {
  id: string;
  labelContent: ReactNode;
  body: ReactNode
  col?: boolean
}

const InputGroup = ({id, labelContent, body, col=true}: props) => {
  return (
    <div className={`flex ${col ? 'flex-col': ''} items-center justify-center gap-1 md:w-48`}>
      <Label id={id}>{labelContent}</Label>
      <div id={id}>{body}</div>
    </div>
  );
};

export default InputGroup;