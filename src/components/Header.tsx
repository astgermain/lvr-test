import Auth from "./Auth";
const Header = () => {
  return (
    <header>
      <nav>
        <Auth />
        <ol>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
