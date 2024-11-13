import { useParams } from 'react-router';

import {DefaultExample,DefaultCode, DefaultCodeMarkup} from './Features/default';
import {RoundedExample,RoundedCode, RoundedCodeMarkup} from './Features/rounded';
import {SquaredExample,SquaredCode, SquaredCodeMarkup} from './Features/squared';
import {TextedExample,TextedCode, TextedCodeMarkup} from './Features/text';
import {GroupedExample,GroupedCode, GroupedCodeMarkup} from './Features/grouped';
import {SizeExample,SizeCode, SizeCodeMarkup} from './Features/size';
import DemoBox from '../../Shared/DemoBox';

let componentList = [
  { label: "Default", component: DefaultExample, code: DefaultCode, markup: DefaultCodeMarkup },
  { label: "Rounded", component: RoundedExample, code: RoundedCode, markup: RoundedCodeMarkup },
  { label: "Squared", component: SquaredExample, code: SquaredCode, markup: SquaredCodeMarkup },
  { label: "Texted", component: TextedExample, code: TextedCode, markup: TextedCodeMarkup },
  { label: "Grouped", component: GroupedExample, code: GroupedCode, markup: GroupedCodeMarkup },
  { label: "Size", component: SizeExample, code: SizeCode, markup: SizeCodeMarkup },
  
]

const Avatar = () => {
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
  
  export default Avatar;
