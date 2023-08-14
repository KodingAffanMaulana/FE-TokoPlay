import './SearchBox.css';

const SearchBox = ({ placeholder, onChangeHandler }) => (
    <div className='flex items-center justify-center'>
        <input
            className="gap-4 w-[120px] sm:w-[100%] text-center sm:px-4 sm:py-2 rounded-xl"
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    </div>
);

export default SearchBox;
