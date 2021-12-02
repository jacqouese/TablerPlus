import { NavLink } from 'react-router-dom';
import home from '../img/homeIcon.svg';
import schedule from '../img/scheduleIcon.svg';
import table from '../img/tableIcon.svg';

function Sidebar() {
  return (
    <aside>
        <div className="logo">
          <h2>TablerPlus</h2>
        </div>
        <div className="menu">
          <ul>
            <NavLink exact to="/" activeClassName="active"><li><img src={home} alt="" /> Dom</li></NavLink>
            <NavLink to="/schedule" activeClassName="active"><li><img src={schedule} alt="" /> Harmonogram</li></NavLink>
            <NavLink to="/table" activeClassName="active"><li><img src={table} alt="" /> Tabela brygad</li></NavLink>
          </ul>
        </div>
    </aside>
  );
}

export default Sidebar;
