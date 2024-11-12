const expandIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200v-240h80v160h160v80H200Zm480-320v-160H520v-80h240v240h-80Z"/></svg>
const DemoBox = (props) => {
    console.log(props)
    return <div className='demo-box'>
    <div className='header'>
      <div className='name'>{props.label}</div>
      <div className='action'>
        <ul>
          <li className="expand">{expandIcon}</li>
        </ul>
      </div>
    </div>
    <div className='demo'>
      {props.example}
    </div>
    <div className='code'>
    <code><pre> {props.code}</pre></code>
     
    </div>
    <div className='markup'>
      <code><pre>{props.markup}</pre></code>
    </div>
  </div>;
  };
  
  export default DemoBox;