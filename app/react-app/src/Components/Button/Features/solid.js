import { VRAButton } from 'viralib';
import ReactDOMServer from "react-dom/server";
import Color from './colors';

let comp = Color.map(m => {
    return (
      <VRAButton as="solid" color={m}  />
    )
  });



const SolidExample = comp;
const SolidCode = Color.map(m => {return <ul><li>{'<VRAButton as="solid" color="'+m+'" />'}</li></ul>});
const SolidCodeMarkup = ReactDOMServer.renderToStaticMarkup(comp);


export  {SolidExample, SolidCode, SolidCodeMarkup};

