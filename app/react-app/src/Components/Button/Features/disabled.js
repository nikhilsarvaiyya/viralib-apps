import { VRAButton } from 'viralib';
import ReactDOMServer from "react-dom/server";


const DisabledExample = <VRAButton  disabled={true}   />;
const DisabledCode = '<VRAButton  disabled={true} />';
const DisabledCodeMarkup = ReactDOMServer.renderToStaticMarkup(<VRAButton disabled />);


export  {DisabledExample, DisabledCode, DisabledCodeMarkup};