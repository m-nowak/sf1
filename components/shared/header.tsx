import ModeToggle from "./mode-toogle";

const Header = ({ title, nav }: { title: string; nav: React.ReactNode }) => {
  return (
    <>
      <div className="header ">
        <div>{title}</div>
        <div className="header-right">
          <ModeToggle />
        </div>
      </div>
      {nav}
    </>
  );
};

export default Header;
