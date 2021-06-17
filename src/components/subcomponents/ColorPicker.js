
function ColorPicker(props) {
  return (
    <div className="color-picker">
      <input onChange={(e) => props.setColor(e.target.value)} type="color"/>
      <p style={{paddingBottom: 3}}>{ props.name }</p>
    </div>
  );
}

export default ColorPicker;
