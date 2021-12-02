
//this is the top of every subpage that displays its name
function PageTop(props) {
    return (
      <div className="subpage-top">
        <h3 className="subpage-title">{props.title}</h3>
        <hr className="light-hr"/>
      </div>
    );
  }
  
  export default PageTop;
  