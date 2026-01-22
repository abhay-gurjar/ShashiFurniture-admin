const TextLogo = ({ dark = false }) => {
  return (
    <div className="flex items-center gap-3">
      <img src="/product-images/logo12.png" alt="Logo" className="w-10 h-10 object-contain" />
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
