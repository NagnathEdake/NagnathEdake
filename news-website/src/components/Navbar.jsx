const Navbar = ({ setCategory }) => {
  const newsType = [
    { title: "Technology", path: "technology" },
    { title: "Business", path: "business" },
    { title: "Health", path: "health" },
    { title: "Sports", path: "sports" },
    { title: "Entertainment", path: "entertainment" },
  ];
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span className="badge bg-light text-dark fs-4">News</span>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {newsType.map((type, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <a
                      className="nav-link"
                      onClick={() => setCategory(`${type.path}`)}
                    >
                      {type.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
