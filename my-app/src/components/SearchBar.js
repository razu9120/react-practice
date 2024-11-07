const SearchBar = ({filterText, inStockOnly, setFilterText, setInStockOnly}) => {
    return (
        <form>
            <input type="text" value={filterText} placeholder="Search..." onChange={(e) => setFilterText(e.target.value)} />
            <label>
                <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}

export default SearchBar;