import ModeToggle from "./mode-toogle";

const Header = ({ title, nav }: { title: string; nav: React.ReactNode }) => {
  return (
    
    <div className="">
      <div className="header static top-0">
        <div>{title}</div>
        <div className="header-right">
          <ModeToggle />
        </div>
      </div>
      {nav}
    </div>
  );
};

export default Header;
