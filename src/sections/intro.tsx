
const Intro = () => {
  return (
    <div className="space-y-24 source-sans min-h-screen h-screen w-full overflow-hidden relative flex flex-col">
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 max-w-5xl py-6 flex-1 flex items-start">
        <div className="text-left max-w-5xl ml-0 mt-24">
          <p className="text-4xl font-bold text-slate-200 mb-0 leading-tight">
            Design de websites e landing pages,
          </p>
          <p className="text-4xl font-bold text-slate-200 mb-12 leading-tight">
            Que elevam sua marca.
          </p>
        </div>
      </div>
      {/* Divisor preto como bloco no final da section */}
      <div className="w-full h-full bg-black" />
    </div>
  );
};

export default Intro;    
