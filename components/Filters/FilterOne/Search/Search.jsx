import cls from './search.module.scss';

const Search = () => {
  return (
    <div className={cls.search}>
      <div className={cls.wrapper}>
        <input type="search" placeholder='Search your keyword...' />
        <button><i className="fa-regular fa-magnifying-glass"></i></button>
      </div>
    </div>
  )
}

export default Search
