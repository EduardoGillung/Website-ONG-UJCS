const About = () => {
  return (
    <>
      <section className="container mx-auto px-4 max-w-6xl min-h-[40vh] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Sobre</h2>
        <p className="text-slate-600 text-center max-w-xl">Esta seção pode ser preenchida com informações sobre você, sua empresa ou seu serviço. Edite src/sections/about.tsx para personalizar.</p>
      </section>
      {/* Divisor visual */}
      <div className="w-full h-16 bg-black flex items-center justify-center">
        <div className="w-full h-1 rounded-t-2xl rounded-b-2xl bg-gradient-to-b from-slate-200/30 via-black to-slate-200/30 blur-sm opacity-60" />
      </div>
    </>
  );
};

export default About;
