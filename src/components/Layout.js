import Logo from "../images/Logo.png";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <img src={Logo} alt="Todo" />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
