import { VRAInput } from 'viralib';
import ReactDOMServer from "react-dom/server";

let comp = <  >
    <div className="row">
        <div className="column" >
            <VRAInput />
        </div>
        
    </div>
    <hr />
    <div className="row">
        <div className="column" >
        <VRAInput label="Mobile" />
        </div>
        <div className="column" >
        <VRAInput label="Mobile" alignText="right" />
        </div>
    </div>
    <hr />
    <div className="row">
        <div className="column" >
            <VRAInput label="Last Name" variant="inside" />
        </div>
        <div className="column" >
         <VRAInput label="Last Name" variant="inside" alignText="right" />
        </div>
    </div>
    <hr />
    <div className="row">
        <div className="column" >
            <VRAInput label="Email" variant="online" />
        </div>
        <div className="column" >
            <VRAInput label="Email" variant="online" alignText="right" />
        </div>
    </div>
    <hr />
    
    


    
</>;

const DefaultExample = comp;
const DefaultCode = '<VRAInput/>';
const DefaultCodeMarkup = ReactDOMServer.renderToStaticMarkup(comp);


export { DefaultExample, DefaultCode, DefaultCodeMarkup };