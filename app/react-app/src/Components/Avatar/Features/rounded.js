import { VRAAvatar } from 'viralib';
import ReactDOMServer from "react-dom/server";
import { pngImg1 } from '../../../assets/data/images';
let comp = <VRAAvatar src={pngImg1} type="rounded" />;

const RoundedExample = comp;
const RoundedCode = '<VRAAvatar type="rounded"/>';
const RoundedCodeMarkup = ReactDOMServer.renderToStaticMarkup(comp);


export  {RoundedExample, RoundedCode, RoundedCodeMarkup};