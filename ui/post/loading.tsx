export const PostPreviewLoading = () => {
  return (
    <>
      <div className="flex flex-col w-full [&_h5]:hover:underline transform hover:scale-[1.02] transition-all space-y-3 animate-pulse">
        <div className="flex flex-col space-y-1">
          <div className="h-3.5 bg-white/10 rounded-full w-3/4"></div>
          <div className="flex space-x-1 w-1/3">
            <div className="h-2 bg-white/10 rounded-full w-full"></div>
            <div className="h-2 bg-white/10 rounded-full w-full"></div>
            <div className="h-2 bg-white/10 rounded-full w-full"></div>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="flex space-x-1">
            <div className="h-3 bg-white/10 rounded-full w-10"></div>
            <div className="h-3 bg-white/10 rounded-full w-4"></div>
            <div className="h-3 bg-white/10 rounded-full w-10"></div>
            <div className="h-3 bg-white/10 rounded-full w-72"></div>
            <div className="h-3 bg-white/10 rounded-full w-52"></div>
          </div>
          <div className="flex space-x-1">
            <div className="h-3 bg-white/10 rounded-full w-4"></div>
            <div className="h-3 bg-white/10 rounded-full w-10"></div>
            <div className="h-3 bg-white/10 rounded-full w-5"></div>
            <div className="h-3 bg-white/10 rounded-full w-72"></div>
            <div className="h-3 bg-white/10 rounded-full w-10"></div>
            <div className="h-3 bg-white/10 rounded-full w-52"></div>
          </div>
          <div className="flex space-x-1">
            <div className="h-3 bg-white/10 rounded-full w-10"></div>
            <div className="h-3 bg-white/10 rounded-full w-72"></div>
            <div className="h-3 bg-white/10 rounded-full w-10"></div>
            <div className="h-3 bg-white/10 rounded-full w-52"></div>
          </div>
          <div className="pt-2 flex flex-row justify-end text-xs text-white/50 font-medium items-center align-center">
            <div className="h-2 bg-white/10 rounded-full w-16"></div>
          </div>
        </div>
      </div>
    </>
  );
};
