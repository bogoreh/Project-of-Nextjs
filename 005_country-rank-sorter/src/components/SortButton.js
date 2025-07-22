const SortButton = ({ onClick, children, active, direction }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md ${
        active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
      }`}
    >
      {children}
      {active && (
        <span className="ml-1">{direction === 'asc' ? '↑' : '↓'}</span>
      )}
    </button>
  );
};

export default SortButton;