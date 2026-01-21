const TextLogo = ({ dark = false }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gradient-to-br from-amber-700 to-amber-900 p-2 rounded-lg shadow-lg">
        <svg className="w-7 h-7 text-amber-100" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`text-xl font-bold tracking-tight ${
          dark ? 'text-gray-900' : 'text-gray-200'
        } font-serif`}>
          SHAAHI
        </span>
        <span className={`text-[9px] font-semibold tracking-[0.2em] uppercase ${
          dark ? 'text-amber-700' : 'text-amber-300'
        }`}>
          Furniture
        </span>
      </div>
    </div>
  );
};

export default TextLogo;
