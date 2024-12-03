function Toolbar({filters, selected, onSelectFilter}) {
  const onFilterButtonClick = (evt) => {
    onSelectFilter(evt.currentTarget.textContent);
  }
  
  return (
    <div className="flex gap-2 py-5">
      {filters.map((filterText, index) => (
        <button
          key={`filter-${index}`}
          onClick={onFilterButtonClick}
          className={`px-3 py-2 text-green-800 border border-green-800
            ${selected === filterText && 'bg-green-800 text-white pointer-events-none'}`}
        >
          {filterText}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
