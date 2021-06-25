import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
        <div className="logo">
          <h2>TablerPlus</h2>
        </div>
        <div className="menu">
          <ul>
            <NavLink exact to="/" activeClassName="active"><li>Dom</li></NavLink>
            <NavLink to="/schedule" activeClassName="active"><li>Harmonogram</li></NavLink>
            <NavLink to="/table" activeClassName="active"><li>Tabela brygad</li></NavLink>
          </ul>
        </div>
    </aside>
  );
}

export default Sidebar;
