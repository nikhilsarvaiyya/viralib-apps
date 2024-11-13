import { VRAAvatar, VRAAvatarGroup } from 'viralib';
import ReactDOMServer from "react-dom/server";
import { pngImg1,pngImg2,pngImg3,pngImg4,pngImg5,pngImg6,pngImg7,pngImg8,pngImg9 } from '../../../assets/data/images';
let comp = <VRAAvatarGroup max={5} type="rounded"  > 
    <VRAAvatar src={pngImg1}   />
    <VRAAvatar src={pngImg2}   />
    <VRAAvatar src={pngImg3}   />
    <VRAAvatar src={pngImg4}   />
    <VRAAvatar src={pngImg5}   />
    <VRAAvatar src={pngImg6}   />
    <VRAAvatar src={pngImg7}   />
    <VRAAvatar src={pngImg8}   />
    <VRAAvatar src={pngImg9}   />
</VRAAvatarGroup>;

const GroupedExample = comp;
const GroupedCode = '<VRAAvatar images={[img,img,img,img,img,img]}  count={5} type="grouped"/>';
const GroupedCodeMarkup = ReactDOMServer.renderToStaticMarkup(comp);


export  {GroupedExample, GroupedCode, GroupedCodeMarkup};