import { AddModal } from 'blocks';
import React, { useState } from 'react';
import TreeD3, { RawNodeDatum, TreeProps } from 'react-d3-tree';
import { v4 as uuidv4 } from 'uuid';

function bfs(
  id: string,
  tree: RawNodeDatum | RawNodeDatum[],
  node: RawNodeDatum,
) {
  const queue: RawNodeDatum[] = [];

  queue.unshift(tree as RawNodeDatum);

  while (queue.length > 0) {
    const curNode = queue.pop();

    if (curNode?.attributes?.id === id) {
      curNode?.children?.push(node);

      return { ...tree };
    }

    const len = curNode?.children?.length || 0;

    if (curNode?.children !== undefined) {
      for (let i = 0; i < len; i += 1) {
        queue.unshift(curNode?.children?.[i]);
      }
    }
  }

  return { ...tree };
}

const init = {
  name: 'Предок',
  attributes: {
    id: uuidv4(),
    surname: '',
  },
  children: [],
};

const Tree: React.FC = () => {
  const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>(init);
  const [node, setNode] = useState<RawNodeDatum | RawNodeDatum[]>();
  const title = 'Страница родословной';

  const handleCloseModal = () => setNode(undefined);

  const handleNodeClick = (treeProps: TreeProps) => {
    setNode(treeProps.data);
  };

  const handleSubmit = (name: string) => {
    if (Array.isArray(node)) return;
    if (!node?.attributes?.id) return;

    const newTree = bfs(String(node?.attributes?.id), tree, {
      name,
      attributes: {
        id: uuidv4(),
      },
      children: [],
    });

    if (newTree) setTree(newTree);
  };

  return (
    <div className="relative h-96">
      <h1 className="p-5 text-center font-sans text-3xl">{title}</h1>
      <TreeD3
        data={tree}
        translate={{
          x: 100,
          y: 200,
        }}
        onNodeClick={handleNodeClick}
      />
      <AddModal
        show={Boolean(node)}
        onHide={handleCloseModal}
        onSubmit={(name) => {
          handleSubmit(name);
          handleCloseModal();
        }}
      />
      {/* {init.map((item) => (
        <Person key={item.id} name={item.name} surname={item.surname} />
      ))} */}
    </div>
  );
};

export default Tree;
