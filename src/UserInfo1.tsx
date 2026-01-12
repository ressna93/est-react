import { MyAge } from './MyAge';
import { MyName } from './MyName';

interface UserInfo1Props {
  name: string;
  age: number;
}

export function UserInfo1({ name, age }: UserInfo1Props) {
  return (
    <>
      <MyName name={name} />
      <MyAge age={age} />
    </>
  );
}
