const column =  [
    { label: "Image", indexKey: "image" , validation : { type : "image"}, visible:true,  style : {} },
    { label: "Id", indexKey : "id", validation : { type : "number"}},
    { label: "Role", indexKey: "role", validation : { type : "string"} },
    { label: "Name", indexKey: "firstName", validation : { type : "string"} },
    { label: "city", indexKey: "city" , validation : { type : "String"} },
    { label: "Email", indexKey: "email" , validation : { type : "email",  subject:"Subject", body:"Hello sir/ madam,"} },
    { label: "DOB", indexKey: "birthDate", validation : { type : "date", input : "mm-dd-yy"}, },
    { label: "Phone", indexKey: "phone", validation : { type : "string",}},
    { label: "Gender", indexKey: "gender", validation : { type : 'string'}},
    { label: "Salary", indexKey: "salary", validation : { type : 'number',  append : "", prepand : "$"}, visible : false},
    { label: "Age", indexKey: "age" , validation : { type : "number"}, visible : false },
    { label: "Progress", indexKey: "progress" , validation : { type : "progress"}, visible : false},
    { label: "Description", indexKey: "description", visible : false },
    { label: "", indexKey: "actions" },
  ]

const row = [
    {
        "id": 1,
        "firstName": "John",
        "lastName": "Taylor",
        "salary": 4200000,
        "birthDate": "1990-11-30",
        "age": 27,
        "progress": 78,
        "gender": "male",
        "email": "john.taylor@json.com",
        "role": "user",
        "image": "https://dummyjson.com/icon/isabellad/128",
        "phone": "+1 458-853-7877",
        "cellStyle": [
          {
            "name": "gender",
            "style": {  "background":"#F3E5F5" }
          }
        ],
        "rowStyle": { "background": "#EF5350" }
      },
    ]

const option = [
    {
      sorting: true,
      sortColumn : [1,2,3],
      sortOrder : 'asc',
      sortBy : 'id'
    },
    {
      searching: true,
      searchColumn : [3,4,7],
    }
 ]
const action = [
    { label: "Download", action : "handleDownload" },
    { label: "Delete", action : "handleDelete", confirmMsg : "Are you sure to Download?"},
  ]
const toolbar = {
    tableName :"Employee Listing", 
    tableHeader : true, 
    search: true, 
    download:true, 
    print: true, 
    refresh:true 
 }

export {row, column, option, action, toolbar}
