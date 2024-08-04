import { ReactNode } from "react";

interface NavbarProps {
    children: ReactNode;
  }

const Navbar:React.FC<NavbarProps>  = ({ children }) => {
    return (
      <nav className="navbar">
        {children}
      </nav>
    );
  };

  export default Navbar