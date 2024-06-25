import Header from "@/components/shared/header";
import NavBar from "./nav-bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="sticky top-0">
      <Header title="My profile" nav={<NavBar />} />
      </div>
      {children}
    
    </>
  );
};

export default Layout;
