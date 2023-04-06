import { useState } from 'react';

import Filter from './Filter/Filter';
import Search from './Search/Search';

import cls from './filterOne.module.scss';

const FilterOne = () => {
  const [mode, setMode] = useState('filter');

  const componentToShow = {
    filter: <Filter />,
    search: <Search />
  }

  return (
    <div className={cls.filterOne}>
      <div className={cls.head}>
        <span className={mode === 'filter' ? cls.active : ''} onClick={() => setMode('filter')}>Filter By</span>
        <span className={mode === 'search' ? cls.active : ''} onClick={() => setMode('search')}>Search By</span>
      </div>
      <div className={cls.filtering}>
        {componentToShow[mode]}
      </div>
    </div>
  )
}

export default FilterOne
