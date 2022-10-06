import React, { FC } from 'react';

type StyleListProps = {
  listTitle: string;
  items: string[] ;
};

const StyleList:FC<StyleListProps> = ({listTitle, items}) => {
  return (
    <figure>
    <figcaption>{listTitle}</figcaption>
    <ul className="bg-white rounded-lg max-w-3xl text-gray-900">
        {
          items.map(item => (
            <li key={item} className="px-6 py-2 border-b border-gray-200">{item}</li>
          ))
        }
    </ul>
  </figure>
  );
};

export default StyleList;