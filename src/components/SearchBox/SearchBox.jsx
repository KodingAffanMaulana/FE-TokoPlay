import './SearchBox.css';

const SearchBox = ({ placeholder, onChangeHandler }) => (
    <div className='flex items-center justify-end sm:justify-center'>
        <input
            className="text-[12px] sm:text-lg py-1 px-0 sm:gap-4 w-[60%] sm:w-[80%] text-end sm:text-center sm:px-2 sm:py-2 rounded-xl"
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    </div>
);

export default SearchBox;
