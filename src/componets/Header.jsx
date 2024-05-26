export default function Header() {
  return (
    <header className="container-fluid sticky-top">
      <nav className="row py-4 bg-white phone-none user-select-none">
        <div className="col-md-6 d-flex justify-content-end">
          <ul className="d-flex align-items-center m-0 gap-4 list-unstyled">
            <li className="nav--item">
              <a
                href="index.html"
                className="text-decoration-none clr-b nav--item nav--item--active nav--item--active--hover"
              >
                صفحه ی نخست
              </a>
            </li>
            <li className="nav--item">
              <a
                href="./pages/products.html"
                className="nav--item clr-b text-decoration-none"
              >
                دوره ها
              </a>
            </li>
            <li className="nav--item">
              <a
                href="./pages/articles.html"
                className="nav--item clr-b text-decoration-none"
              >
                مقالات
              </a>
            </li>
            <li className="nav--item">
              <a
                href="./pages/cart.html"
                className="nav--item clr-b text-decoration-none"
              >
                سبد خرید
              </a>
            </li>
            <li className="nav--item">
              <a
                href="./pages/about-us.html"
                className="nav--item clr-b text-decoration-none"
              >
                درباره ما / تماس باما
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-5 d-flex justify-content-around align-items-center">
          <div className="d-flex align-items-center gap-4 justify-content-between">
            <form
              action=""
              className="d-flex align-items-center ms-4 w-75 position-relative"
            >
              <span
                className="ps-2 text-secondary fs-4 material-symbols-outlined position-absolute"
                id="search-icon-top"
              >
                search
              </span>
              <input
                type="text"
                name=""
                className="form-control rounded-pill w-100 px-5 shadow py-1 border border-1"
                id="search-input"
                placeholder="جستوجو"
              />
            </form>
            <div className="d-flex gap-5 align-items-center justify-content-center">
              <div className="bg-white shadow p-2-11 rounded-circle cursor-p d-flex justify-content-center align-content-center">
                <span className="material-symbols-outlined"> shopping_bag </span>
              </div>
              <a href="./pages/login.html" className="text-decoration-none">
                <div className="rounded-circle shadow p-2-11 cursor-p d-flex bg-gradient-p-lp justify-content-center align-content-center">
                  <span className="material-symbols-outlined text-white">
                    person
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="row bg-white py-2 phone-show">
        <div className="col-md-12 d-flex align-items-center justify-content-between gap-2">
          <label htmlFor="menu-toggle" className="menu-icon user-select-none">
            &#9776;
          </label>
          <input type="checkbox" id="menu-toggle" />
          <form action="" className="d-flex align-items-center position-relative">
            <span
              className="ps-2 text-secondary fs-4 material-symbols-outlined position-absolute"
              id="search-icon-top"
            >
              search
            </span>
            <input
              type="text"
              name=""
              className="form-control rounded-pill w-100 px-5 shadow py-1 border border-1"
              id="search-input"
              placeholder="جستوجو"
            />
          </form>
          <a href="./pages/login.html" className="text-decoration-none">
            <div className="rounded-circle shadow p-2-11 d-flex cursor-p user-select-none bg-gradient-p-lp justify-content-center align-content-center">
              <span className="material-symbols-outlined text-white"> person </span>
            </div>
          </a>
          <nav className="menu">
            <ul>
              <li>
                <a href="./index.html" className="text-center">
                  صفحه ی نخست
                </a>
              </li>
              <li>
                <a href="./pages/products.html" className="text-center">
                  دوره ها
                </a>
              </li>
              <li>
                <a href="./pages/articles.html" className="text-center">
                  مقالات
                </a>
              </li>
              <li>
                <a href="./pages/cart.html" className="text-center">
                  سبد خرید
                </a>
              </li>
              <li>
                <a href="./pages/about-us.html" className="text-center">
                  درباره ما / تماس باما
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
