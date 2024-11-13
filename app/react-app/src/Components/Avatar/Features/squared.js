import { VRAAvatar } from 'viralib';
import ReactDOMServer from "react-dom/server";
import { pngImg1 } from '../../../assets/data/images';

let comp = <VRAAvatar src={pngImg1} type="squared" />;

const SquaredExample = comp;
const SquaredCode = '<VRAAvatar type="squared"/>';
const SquaredCodeMarkup = ReactDOMServer.renderToStaticMarkup(comp);


export { SquaredExample, SquaredCode, SquaredCodeMarkup };