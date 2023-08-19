import React from 'react';

import Person from 'components/Person/Person';

const Tree: React.FC = () => {
  const title = 'Страница моей родословной';

  return (
    <>
      <h1 className="p-5 text-center font-sans text-3xl">{title}</h1>
      <Person />
    </>
  );
};

export default Tree;
