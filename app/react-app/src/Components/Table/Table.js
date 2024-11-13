import { SDTable } from 'react-sd-table';
import columns from '../../assets/data/column';
import rows from '../../assets/data/rows';

import { useParams } from 'react-router';
import { row, column, option, action, toolbar } from '../../assets/data/code';
import openTab from '../../assets/js/main';


const Table = () => {
  const params = useParams();

  let code;
  switch (params.page) {
    case 'row': code = row
      break;
    case 'column': code = column
      break;
    case 'option': code = option
      break;
    case 'action': code = action
      break;
    case 'toolbar': code = toolbar
      break;
    default:
      break;
  }

  let renderCode = JSON.stringify(code, null, 2)

  let renderTable = <SDTable
    rows={rows}
    columns={columns}
    options={params.page === "option" ? code : []}
    toolbar={params.page === "toolbar" ? code : {}}
    actions={params.page === "action" ? code : []}
    display={params.page === "display" ? params.type : null}
  />
  return (
    <div style={{ width: "100%" }}>

      <div className="tab">
        <button className="tablinks active" onClick={(event) => openTab(event, 'Example')}>Example</button>
        <button className="tablinks" onClick={(event) => openTab(event, 'Code')}>Code</button>
      </div>

      <div id="Example" className="tabcontent" style={{ display: "block" }}>
        {renderTable}
      </div>

      <div id="Code" className="tabcontent">
        <code>
          <pre>
            {renderCode}
          </pre>
        </code>
      </div>
    </div>
  )
};

export default Table;