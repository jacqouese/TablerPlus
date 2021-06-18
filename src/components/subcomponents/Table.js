import { useState } from "react";

//this is the top of every subpage that displays its name
function Table(props) {
    const localNames = JSON.parse(props.names);

    const [First, setFirst] = useState(localNames[1]);

    return (
      <div className="table-outline">
        <div className="table-column">
          <div className="table-title">
            <h1>{props.name}</h1>
          </div>
          <div className="table-element">
            <div></div>
            <p>1. </p>
            <input type="text" className="table-input" onChange={e => setFirst(e.target.value)} value={First}/>
          </div>
          <div className="table-element">
            <div></div>
            <p>2. </p>
            <input type="text" className="table-input" value={localNames[2]}/>
          </div>
          <div className="table-element">
            <div></div>
            <p>3. </p>
            <input type="text" className="table-input" value={localNames[3]}/>
          </div>
          <div className="table-element">
            <div></div>
            <p>4. </p>
            <input type="text" className="table-input" value={localNames[4]}/>
          </div>
          <div className="table-element">
            <div></div>
            <p>5. </p>
            <input type="text" className="table-input" value={localNames[5]}/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Table;
  