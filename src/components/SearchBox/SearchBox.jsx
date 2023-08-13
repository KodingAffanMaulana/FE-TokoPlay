import './SearchBox.css';

const SearchBox = ({ placeholder, onChangeHandler }) => (
    <div className='flex items-center'>
        <input
            className="gap-4 px-4 py-3 rounded-xl"
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    </div>
);

export default SearchBox;
