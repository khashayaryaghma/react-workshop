import "./header.css";

function Header() {
  const navItems = [
    {
      route: "/",
      title: "Home",
      id: 141241,
    },
    {
      route: "/contact",
      title: "Contact",
      id: 145454745,
    },
  ];

  return (
    <header>
      <a href="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjcHUJmbeEjlTGBf5sKqNm4c5JPF6CHoD6Q&s" alt="Logo" className="logo" />
      </a>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.route} className="navLink">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
