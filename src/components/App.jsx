import React from 'react';
import Homework01 from './Homework01/Homework01';
import Homework02 from './Homework02/Homework02';

import s from'./App.module.css'



export const App = () => {
  return (
    <main>
			<section className={s.layer}>
			<Homework01/>
			<Homework02/>
			</section>
    </main>
  );
};
