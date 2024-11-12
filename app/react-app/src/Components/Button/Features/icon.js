import { VRAButton } from 'viralib';
import ReactDOMServer from "react-dom/server";
import { del, drag, expand, filter, fullscreen, home, keyboard, login, menu, more_hori, more_vert, open_in, open_with, person, person_2, refresh, search, sentiment, setting, sync, view, bed_time, clear_all, clock, close } from '../../../assets/data/icons';



let iconList = ['<VRAButton iconStart={<user />} as="solid" />','<VRAButton iconStart={<user />} as="outline" />','<VRAButton iconEnd={<user />} as="link" />','<VRAButton iconEnd={<user />} disabled />']
let displayExample = <>
<div style={{width:"33%",float:"left", border:"1px solid #e5e5e5", padding:"10px"}}>
<h3>Default</h3>
<VRAButton iconStart={del}  />
<VRAButton iconStart={drag}  />
<VRAButton iconStart={expand}  />
<VRAButton iconStart={keyboard}  />
</div>
<div style={{width:"33%",float:"left", border:"1px solid #e5e5e5", padding:"10px"}}>
<h3>Default Solid</h3>
<VRAButton iconStart={menu} as="solid" />
<VRAButton iconStart={expand} as="solid" />
<VRAButton iconStart={more_hori} as="solid" />
<VRAButton iconStart={more_vert} as="solid" />
</div>
<div style={{width:"33%",float:"left", border:"1px solid #e5e5e5", padding:"10px"}}>
<h3>Disabled</h3>
<VRAButton iconEnd={bed_time} disabled />
<VRAButton iconEnd={clear_all} disabled />
<VRAButton iconEnd={clock} disabled />
<VRAButton iconEnd={close} disabled />
</div>

<div style={{width:"33%",float:"left", border:"1px solid #e5e5e5", padding:"10px"}}>
<h3>Solid</h3>
<VRAButton iconStart={open_with} as="solid"  />
<VRAButton iconStart={person} as="solid"  />
<VRAButton iconStart={sentiment} as="solid"  />
<VRAButton iconStart={refresh} as="solid"  />
</div>

<div style={{width:"33%",float:"left", border:"1px solid #e5e5e5", padding:"10px"}}>
<h3>Link</h3>
<VRAButton iconEnd={filter} as="link" />
<VRAButton iconEnd={view} as="link"/>
<VRAButton iconEnd={login} as="link" />
<VRAButton iconEnd={fullscreen} as="link" />
</div>
<div style={{width:"33%",float:"left", border:"1px solid #e5e5e5", padding:"10px"}}>
<h3>Outline</h3>
<VRAButton iconStart={sentiment} as="outline" />
<VRAButton iconStart={setting} as="outline"/>
<VRAButton iconStart={sync} as="outline"/>
<VRAButton iconStart={home} as="outline" />
</div>
<div style={{width:"33%",float:"left", border:"1px solid #e5e5e5", padding:"10px"}}>
<h3>Colored Solid</h3>
<VRAButton iconStart={open_with} as="solid" color="red" />
<VRAButton iconStart={person} as="solid" color="green" />
<VRAButton iconStart={sentiment} as="solid" color="blue" />
<VRAButton iconStart={refresh} as="solid" color="orange" />
</div>
<div style={{width:"33%",float:"left", border:"1px solid #e5e5e5", padding:"10px"}}>
<h3>Colored Link</h3>
<VRAButton iconEnd={filter} as="link" color="red"/>
<VRAButton iconEnd={view} as="link" color="green"/>
<VRAButton iconEnd={login} as="link" color="blue"/>
<VRAButton iconEnd={fullscreen} as="link" color="orange"/>
</div>

<div style={{width:"33%",float:"left", border:"1px solid #e5e5e5", padding:"10px"}}>
<h3>Colored Outline</h3>
<VRAButton iconStart={sentiment} as="outline" color="red"/>
<VRAButton iconStart={setting} as="outline" color="green"/>
<VRAButton iconStart={sync} as="outline" color="blue"/>
<VRAButton iconStart={home} as="outline" color="orange"/>
</div>

</>
const codeExample = <ul>{iconList.map(m => {return <li>{m}</li>})}</ul>

const VariantIconExample = displayExample;
const VariantIconCode = codeExample;
const VariantIconCodeMarkup = ReactDOMServer.renderToStaticMarkup(<VRAButton iconStart={del} />);


const DefaultIconExample = <VRAButton iconStart={search} />;
const DefaultIconCode = '<VRAButton iconStart={<User />} />'
const DefaultIconCodeMarkup = ReactDOMServer.renderToStaticMarkup(<VRAButton iconStart={del} />);

const LeftLabelIconExample = <VRAButton iconEnd={del} label="Delete"/>;
const LeftLabelIconCode = '<VRAButton iconEnd={<delete />} label="Delete"/>'
const LeftLabelIconCodeMarkup = ReactDOMServer.renderToStaticMarkup(<VRAButton iconEnd={del} label="Delete"/>);

const RightLabelIconExample = <VRAButton iconStart={del} label="Delete"/>;
const RightLabelIconCode = '<VRAButton iconStart={<delete />} label="Delete"/>'
const RightLabelIconCodeMarkup = ReactDOMServer.renderToStaticMarkup(<VRAButton iconStart={del} label="Delete"/>);



export {
        DefaultIconExample,
        DefaultIconCode, 
        DefaultIconCodeMarkup,
        LeftLabelIconExample,
        LeftLabelIconCode, 
        LeftLabelIconCodeMarkup,
        RightLabelIconExample,
        RightLabelIconCode, 
        RightLabelIconCodeMarkup,
        VariantIconExample,
        VariantIconCode, 
        VariantIconCodeMarkup,
        
    };