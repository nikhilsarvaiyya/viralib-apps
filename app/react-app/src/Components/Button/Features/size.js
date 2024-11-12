import { VRAButton } from 'viralib';
import ReactDOMServer from "react-dom/server";
import Color from './colors';
const sz = ["xxs", "xs","x","xl","xxl"]
const clr = Color

let Comp = sz.map(m => {
    return (
        <>
            <h1>{m === "x" ? "Default" : m}</h1>
            <VRAButton as="solid" size={m} />
            <VRAButton as="outline" size={m} />
            <VRAButton as="link" size={m} /> <br /><br />
        </>

    )
})

let markup = <VRAButton as='solid' size='xs' />


const SizeExample = Comp;
const SizeCode = '<VRAButton as="solid" size="xs" />';
const SizeCodeMarkup = ReactDOMServer.renderToStaticMarkup(markup);


export  {SizeExample, SizeCode, SizeCodeMarkup};