import Header from "@/components/shared/header";
import NavBar from "./nav-bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header title="Low Volume" nav={<NavBar />} />

      {children}
    </>
  );
};

export default Layout;
