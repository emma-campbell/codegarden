export const Search = () => {
  return (
    <>
      <form>
        <div className="relative">
          <div className="absolute inset-y-0 flex items-center pl-2 pointer-events-none"> 
            <svg
              width="20"
              height="20"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.44509 1.23142C5.32123 2.45753 3.80185 4.43763 3.16716 6.80647C2.53234 9.17532 2.85825 11.6497 4.08437 13.7736C5.71977 16.606 8.76915 18.3656 12.0428 18.3656C13.0765 18.3656 14.1021 18.1877 15.0744 17.8463L19.2046 25L22.1495 23.2997L18.02 16.1472C19.4149 14.9537 20.4191 13.3708 20.9046 11.5591C21.5393 9.19028 21.2134 6.71602 19.9873 4.59201C18.352 1.7596 15.3025 0 12.0289 0C10.4255 0 8.84042 0.425753 7.44509 1.23142ZM17.0424 6.2923C17.8144 7.62955 18.0195 9.18756 17.6199 10.6791C17.2203 12.1706 16.2636 13.4172 14.9264 14.1893C14.0474 14.6968 13.0502 14.965 12.0428 14.965C9.9803 14.965 8.05924 13.857 7.02941 12.0733C6.25734 10.736 6.05222 9.17817 6.45199 7.68654C6.85162 6.19505 7.80828 4.94839 9.14552 4.17619C10.0244 3.66882 11.0216 3.40058 12.0289 3.40058C14.0916 3.40058 16.0125 4.50863 17.0424 6.2923Z"
                fill="#FDFFFF"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default_search"
            placeholder="Search for a post..."
            className="bg-transparent-black text-lg text-gray-100 block p-1 pl-8 w-full rounded-full drop-shadow-md focus:ring-orange-100"
          />
        </div>
      </form>
    </>
  );
};