
  import { VRAButton } from 'viralib';
  import ReactDOMServer from "react-dom/server";
  import Color from './colors';
  const clr = Color

  let comp = clr.map(m => {
    return (
      <VRAButton as="outline" color={m}  />
    )
  })


const OutlineExample = comp;
const OutlineCode = Color.map(m => {return <ul><li>{'<VRAButton as="outline" color="'+m+'" />'}</li></ul>});
const OutlineCodeMarkup = ReactDOMServer.renderToStaticMarkup(comp);


export {OutlineExample, OutlineCode, OutlineCodeMarkup};

