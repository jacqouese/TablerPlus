import { useState } from "react";

//this is the top of every subpage that displays its name
function Table(props) {
    const localNames = JSON.parse(props.names);

    const [first, setFirst] = useState(localNames[1]);
    const [second, setSecond] = useState(localNames[2]);
    const [third, setThird] = useState(localNames[3]);
    const [fourth, setFourth] = useState(localNames[4]);
    const [fifth, setFifth] = useState(localNames[5]);

    const handleSave = () => {
      var name = props.name
      name = name.toLowerCase().replace(/\s/g, '');
      localStorage.setItem(name, '{"1":"'+first+'", "2":"'+second+'", "3":"'+third+'", "4":"'+fourth+'", "5":"'+fifth+'"}')
    }

    return (
      <div className="table-outline">
        <div className="table-column">
          <div className="table-title">
            <h1>{props.name}</h1>
          </div>
          <div className="table-element">
            <div></div>
            <p>1. </p>
            <input type="text" className="table-input" onChange={e => setFirst(e.target.value)} onBlur={handleSave} value={first} />
          </div>
          <div className="table-element">
            <div></div>
            <p>2. </p>
            <input type="text" className="table-input" onChange={e => setSecond(e.target.value)} onBlur={handleSave} value={second} />
          </div>
          <div className="table-element">
            <div></div>
            <p>3. </p>
            <input type="text" className="table-input" onChange={e => setThird(e.target.value)} onBlur={handleSave} value={third} />
          </div>
          <div className="table-element">
            <div></div>
            <p>4. </p>
            <input type="text" className="table-input" onChange={e => setFourth(e.target.value)} onBlur={handleSave} value={fourth} />
          </div>
          <div className="table-element">
            <div></div>
            <p>5. </p>
            <input type="text" className="table-input" onChange={e => setFifth(e.target.value)} onBlur={handleSave} value={fifth} />
          </div>
        </div>
      </div>
    );
  }
  
  export default Table;
  