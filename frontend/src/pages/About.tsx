import React, { FC } from 'react';
import StyledList from '../components/UI/List/StyleList'
import Link from '@mui/material/Link';

const About:FC= () => {
  return (
    <section>
      <h1 className="font-bold text-center text-4xl my-5">
        About
      </h1>
      <p className="text-center mb-10">App repository: <Link href="https://github.com/ithrforu/">GitHub</Link>.</p>
      <div className="flex justify-between">
      <StyledList
        listTitle="Technology list: "
        items={[
          'React',
          'Create react app',
          'React Router v6.3',
          'TypeScript',
          'Material UI',
          'Tailwind',
        ]}
      />
      <StyledList
        listTitle="TODO: "
        items={[
          'Create forms with Formik.',
          'Validate forms with yup.',
          'Create authorization.',
          'Add comments to source code.',
        ]}
      />
      </div>
    </section>
  );
};

export default About;