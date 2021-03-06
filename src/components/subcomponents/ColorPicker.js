import { useRef } from "react";

function ColorPicker(props) {
  const ref = useRef();

  const spans = [];

  //push hidden colors
  props.colors.forEach(color => {
    spans.push(<span className="picker" style={{backgroundColor: color}} onClick={() => props.setColor(color)}></span>);
  })

  const toggleHidden = (color) => {
    if (ref.current.classList.contains('trigger-flex')) {
      ref.current.classList.remove('trigger-flex');
    }
    else {
      ref.current.classList.add('trigger-flex');
    }
  }

  return (
    <div className="color-picker" id="a">
      <span className="picker picker-main" style={{backgroundColor: props.color}}></span>
      <p>{props.name}</p>
      <div className="hidden-colors" ref={ref} id="b">
        {spans}
      </div>
    </div>
  );
}

export default ColorPicker;
