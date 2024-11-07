const columns = [
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

  export default columns