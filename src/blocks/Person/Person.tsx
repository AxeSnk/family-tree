import React, { useState } from 'react';

import { Input } from 'components';

type TPerson = {
  name: string;
  surname: string;
};

const Person: React.FC<TPerson> = ({ name = '', surname = '' }) => {
  const [person, setPerson] = useState({
    name,
    surname,
  });

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ) => {
    const { value } = ev.target;

    setPerson((prev) => ({ ...prev, [key]: value }));
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
