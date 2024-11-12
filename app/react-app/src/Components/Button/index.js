import { useParams } from 'react-router';

import {Default,DefaultCode, DefaultCodeMarkup} from './Features/default';
import {SolidExample,SolidCode, SolidCodeMarkup} from './Features/solid';
import {OutlineExample,OutlineCode, OutlineCodeMarkup} from './Features/outline';
import {LinkExample,LinkCode, LinkCodeMarkup} from './Features/link';
import {SizeExample,SizeCode, SizeCodeMarkup} from './Features/size';
import {DefaultIconExample,DefaultIconCode, DefaultIconCodeMarkup,LeftLabelIconExample,LeftLabelIconCode, LeftLabelIconCodeMarkup,RightLabelIconExample,RightLabelIconCode, RightLabelIconCodeMarkup,VariantIconExample,VariantIconCode, VariantIconCodeMarkup} from './Features/icon';
import {DisabledExample,DisabledCode, DisabledCodeMarkup} from './Features/disabled';


import DemoBox from '../../Shared/DemoBox';

let componentList = [
  { label: "Default", component: Default, code: DefaultCode, markup: DefaultCodeMarkup },
  { label: "Solid", component: SolidExample, code: SolidCode, markup: SolidCodeMarkup },
  { label: "Outline", component: OutlineExample, code: OutlineCode, markup: OutlineCodeMarkup },
  { label: "Link", component: LinkExample, code: LinkCode, markup: LinkCodeMarkup },
  { label: "Size", component: SizeExample, code: SizeCode, markup: SizeCodeMarkup },
  { label: "Default Icon", component: DefaultIconExample, code: DefaultIconCode, markup: DefaultIconCodeMarkup },
  { label: "Left Label Icon", component: LeftLabelIconExample, code: LeftLabelIconCode, markup: LeftLabelIconCodeMarkup },
  { label: "Right Label Icon", component: RightLabelIconExample, code: RightLabelIconCode, markup: RightLabelIconCodeMarkup },
  { label: "Icon Variant", component: VariantIconExample, code: VariantIconCode, markup: VariantIconCodeMarkup },
  { label: "Disabled", component: DisabledExample, code: DisabledCode, markup: DisabledCodeMarkup }
]

const Button = () => {
    const params = useParams();
    
    return componentList.map(item => {
        return (
          <DemoBox 
            label={item.label}
            example={item.component} 
            params={params}
            code={item.code}
            markup={item.markup}
          />
       
      )}
    )
  };
  
  export default Button;


  // console.log(params)
  //   if(params.page === "solid"){
  //     return Solid
  //   }
  //   if(params.page === "outline"){
  //     return Outline
  //   }
  //   if(params.page === "link"){
  //     return Link
  //   }
  //   if(params.page === "disabled"){
  //     return Disabled
  //   }
   
  //   if(params.page === "size"){
  //     return Size
  //   }
  //   if(params.page === "border"){
  //     return Border
  //   }
  //   if(params.page === "icon"){
  //     return Icon
  //   }