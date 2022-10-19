import React from 'react';

interface Props {
  values: { name: string; age: string };
}

const Message: React.FC<Props> = ({ values }) => (
  <div className="message">
    <p>
      Hi {values.name}, you are {values.age} years old.
    </p>
  </div>
);

export default Message;
