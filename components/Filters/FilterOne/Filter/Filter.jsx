import CustomSelect from '../../../UIs/CustomSelect/CustomSelect';

import cls from './filter.module.scss';

const Filter = () => {
  return (
    <div className={cls.filter}>
      <CustomSelect label="Select color" />
      <CustomSelect label="Select brand" />
      <CustomSelect label="Select size" />
      <CustomSelect label="Select variant" />
      <button>Filter</button>
    </div>
  )
}

export default Filter
