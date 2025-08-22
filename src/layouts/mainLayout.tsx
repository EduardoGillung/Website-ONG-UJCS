import Header from "../components/header";
import Footer from "../components/footer";


interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Bordas laterais pretas */}
      <div className="absolute left-0 top-0 h-full w-4 bg-black z-20" />
      <div className="absolute right-0 top-0 h-full w-4 bg-black z-20" />
      {/* Borda preta horizontal no topo */}
      <div className="absolute left-0 top-0 w-full h-4 bg-black z-20" />
      {/* Balatro Top Effect */}
      <div className="absolute left-0 top-0 w-full h-[100vh] -z-10 pointer-events-none">
      </div>


      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
