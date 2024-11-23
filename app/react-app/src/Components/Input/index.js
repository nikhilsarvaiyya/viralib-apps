import { useParams } from 'react-router';

import {DefaultExample,DefaultCode, DefaultCodeMarkup} from './Features/default';

import DemoBox from '../../Shared/DemoBox';

let componentList = [
  { label: "Default", component: DefaultExample, code: DefaultCode, markup: DefaultCodeMarkup },

  
]

const Input = () => {
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
  
  export default Input;
