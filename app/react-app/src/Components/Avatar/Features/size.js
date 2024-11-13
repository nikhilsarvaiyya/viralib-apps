import { VRAAvatar } from 'viralib';
import ReactDOMServer from "react-dom/server";
import { pngImg1,pngImg2,pngImg3,pngImg4,pngImg5,pngImg6,pngImg7,pngImg8,pngImg9 } from '../../../assets/data/images';


let comp = <  >

    <VRAAvatar src={pngImg1} size="xxs" />
    <VRAAvatar src={pngImg2} size="xs" />
    <VRAAvatar src={pngImg3} size="s" />
    <VRAAvatar src={pngImg4} />
    <VRAAvatar src={pngImg5} size="l" />
    <VRAAvatar src={pngImg6} size="xl" />
    <VRAAvatar src={pngImg7} size="xxl" />

</>;

const SizeExample = comp;
const SizeCode = '<VRAAvatar/>';
const SizeCodeMarkup = ReactDOMServer.renderToStaticMarkup(comp);


export { SizeExample, SizeCode, SizeCodeMarkup };