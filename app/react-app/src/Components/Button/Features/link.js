import {VRAButton} from 'viralib';
import ReactDOMServer from "react-dom/server";
import Color from './colors';
const clr = Color

let Comp = clr.map(m => {
  return (
    <VRAButton as="link" color={m}  />
  )
})

  

const LinkExample = Comp;
const LinkCode = Color.map(m => {return <ul><li>{'<VRAButton as="solid" color="'+m+'" />'}</li></ul>});
const LinkCodeMarkup = ReactDOMServer.renderToStaticMarkup(Comp);


export  {LinkExample, LinkCode, LinkCodeMarkup};