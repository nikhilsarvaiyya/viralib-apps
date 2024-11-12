import { VRAButton } from 'viralib';
import ReactDOMServer from "react-dom/server";
import { del } from '../../../assets/data/icons';

let comp = <VRAButton 

  as="red"
  iconStart={del}
  />;

const Default = comp;
const DefaultCode = '<VRAButton />';
const DefaultCodeMarkup = ReactDOMServer.renderToStaticMarkup(comp);


export  {Default, DefaultCode, DefaultCodeMarkup};