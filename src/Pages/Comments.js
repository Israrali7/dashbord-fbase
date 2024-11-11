import React from 'react';
import Screen from '../Components/Screen';
import { useNavigate } from 'react-router-dom';

export default function Comments() {
  const navigation = useNavigate();

  const redirect = () => {
    navigation('formcomments');  // Navigate to /formcomments
  };

  return (
    <div>
      <Screen
        title="Comment"
        onclick={redirect}
        label={"Add Comments"}
      />
    </div>
  );
}
