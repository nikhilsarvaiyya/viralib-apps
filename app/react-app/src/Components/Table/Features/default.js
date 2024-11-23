import { VRATable, VRATableHead, VRATableBody, VRATablePaginate } from 'viralib';
import ReactDOMServer from "react-dom/server";
import columns from '../../../assets/js/columns';
import { users } from '../../../assets/js/faker-data';


let comp = <  >
    <VRATable  
    // filter={{}}
      >
        <VRATableHead  column={columns} ></VRATableHead>
        <VRATableBody row={users}></VRATableBody>
        <VRATablePaginate 
            // page={[10,20,30,40,50]} 
            // rowsPerPage={5}
            // activePage={1}
           />
    </VRATable>
</>;

const DefaultExample = comp;
const DefaultCode = '<VRAInput/>';
const DefaultCodeMarkup = ReactDOMServer.renderToStaticMarkup(comp);


export { DefaultExample, DefaultCode, DefaultCodeMarkup };