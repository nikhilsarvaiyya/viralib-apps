import { Outlet, Link } from "react-router-dom";
import { useParams, useLocation } from 'react-router-dom';
import menus from "./assets/data/menus";

const menu = menus

const App = () => {
  const params = useParams();
  let location = useLocation();

  let renderIcon = <>
    <span className="down">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
    </span>
    <span className="right">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
    </span></>
  console.log(params, location)
  let renderMenu = menu?.map((item, i) => {
    return (
      <>
        <li><Link to={item.path}>{item.label}</Link>
          {item?.children?.length > 0 ?
            <>
              {renderIcon}
              <ul className="submenu">
                {item?.children?.map((child, i) => {
                  return (<li><Link to={child.path}>{child.label}</Link>

                    {child?.children?.length > 0 ?
                      <>
                        {renderIcon}
                        <ul className="subsubmenu">
                          {child?.children?.map((c, i) => {
                            return (<li><Link to={c.path}>{c.label}</Link></li>)
                          })}
                        </ul> </> : ""}

                  </li>)
                })}
              </ul>
            </>
            : ""}
        </li>
      </>
    )
  })

  return (


    <>

      <header className="app-header">
        <h2><Link to="/">Viralib</Link></h2>
      </header>

      <section className="app-section">
        <nav className="navigation app-nav">
          <ul className="mainmenu">
            {renderMenu}
          </ul>
        </nav>


        <div className="app-main">
          <div className="sub-header">

            <div className="sub-header-label">{params.page || location.pathname.slice(1)}</div>
            <div className="breadcrumb">
              {/* <ul >
                <li><Link to="/">Home</Link></li>
                <li>{params.page}</li>
              </ul> */}
            </div>
          </div>
          <div className="outlet">
            <Outlet />
          </div>

        </div>
      </section>

      <footer className="app-footer">
        <div>
          <div>Copyright</div>
          <div>Version 2.2.4</div>
        </div>
      </footer>
    </>
  )
};

export default App;