import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
        <div className="logo">
          <h2>TablerPlus</h2>
        </div>
        <div className="menu">
          <ul>
            <Link to="/"><li id="active">Dom</li></Link>
            <Link to="/schedule"><li>Harmonogram</li></Link>
            <Link to="/table"><li>Tabela brygad</li></Link>
          </ul>
        </div>
    </aside>
  );
}

export default Sidebar;
