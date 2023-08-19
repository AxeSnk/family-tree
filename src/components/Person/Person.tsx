import Input from 'components/Input/Input';
import React, { useState } from 'react';

const Person: React.FC = () => {
  const [person, setPerson] = useState({ name: '', surname: '' });

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    const { value } = ev.target;

    setPerson((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex w-fit flex-col gap-2 rounded-xl border-2 border-indigo-700/50 p-2">
      <Input
        name="name"
        value={person.name}
        placeholder="Имя"
        onChange={(ev) => handleChange(ev, 'name')}
      />
      <Input
        name="surname"
        value={person.surname}
        placeholder="Фамилия"
        onChange={(ev) => handleChange(ev, 'surname')}
      />
    </div>
  );
};

export default Person;
