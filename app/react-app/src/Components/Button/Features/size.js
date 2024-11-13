import { VRAButton } from 'viralib';
import ReactDOMServer from "react-dom/server";
import Color from './colors';
const sz = ["xxs", "xs","s","d","l","xl","xxl"]
const clr = Color

let Comp = sz.map(m => {
    return (
        <>
            
            {m === "d" ? <>
                <h1>Default</h1>
                <VRAButton as="solid"  />
            <VRAButton as="outline"  />
            <VRAButton as="link"  /> <br /><br /></> : 
            <>
            <h1>{m}</h1>
            <VRAButton as="solid" size={m} />
            <VRAButton as="outline" size={m} />
            <VRAButton as="link" size={m} /> <br /><br />
            </>}
            
        </>

    )
})

let markup = <VRAButton as='solid' size='xs' />


const SizeExample = Comp;
const SizeCode = '<VRAButton as="solid" size="xs" />';
const SizeCodeMarkup = ReactDOMServer.renderToStaticMarkup(markup);


export  {SizeExample, SizeCode, SizeCodeMarkup};