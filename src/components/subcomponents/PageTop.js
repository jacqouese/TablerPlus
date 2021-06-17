
//this is the top of every subpage that displays its name
function PageTop(props) {
    return (
      <div>
        <h3 className="subpage-title">{props.title}</h3>
        <hr className="light-hr"/>
      </div>
    );
  }
  
  export default PageTop;
  