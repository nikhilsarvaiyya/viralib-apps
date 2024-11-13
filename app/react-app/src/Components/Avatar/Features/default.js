import { VRAAvatar, VRAAvatarGroup } from 'viralib';
import ReactDOMServer from "react-dom/server";
import { pngImg1 } from '../../../assets/data/images';
let comp = <  > 
<VRAAvatar src={pngImg1} /> 
<VRAAvatar alt="john Deo" style={{background:"red",color:"white"}}/> 
<VRAAvatar />    

</>;

const DefaultExample = comp;
const DefaultCode = '<VRAAvatar/>';
const DefaultCodeMarkup = ReactDOMServer.renderToStaticMarkup(comp);


export  {DefaultExample, DefaultCode, DefaultCodeMarkup};