import Sidebar from "@/components/shared/sidebar";

export const dynamic = "force-dynamic";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>

      {/* <Toaster /> */}
    </main>
  );
};

export default Layout;
