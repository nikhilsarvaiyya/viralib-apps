import { VRAAvatar, VRAAvatarGroup } from 'viralib';
import ReactDOMServer from "react-dom/server";


let comp = <  >
    <VRAAvatar size="xxs" alt="John Deo" />
    <VRAAvatar size="xs" alt="John Deo" />
    <VRAAvatar size="s" alt="John Deo" />
    <VRAAvatar alt="John Deo" />
    <VRAAvatar size="l" alt="John Deo"  />
    <VRAAvatar size="xl" alt="John Deo" />
    <VRAAvatar size="xxl" alt="John Deo" />
</>;

const TextedExample = comp;
const TextedCode = '<VRAAvatar/>';
const TextedCodeMarkup = ReactDOMServer.renderToStaticMarkup(comp);


export { TextedExample, TextedCode, TextedCodeMarkup };