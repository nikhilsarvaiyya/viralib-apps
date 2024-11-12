const menus = [
    {
      label: "Table", path: "table", 
      children: [
        {
          label: "Row", path: "table/row",
          children: [],
        },
        {
          label: "Column", path: "table/column",
          children: [],
        },
        {
          label: "Option", path: "table/option",
          children: [],
        },
        {
          label: "Toolbar", path: "table/toolbar",
          children: [],
        },
        {
          label: "Action", path: "table/action",
          children: [],
        },
        {
          label: "Dropdown", path: "table/dropdown",
          children: [],
        },
        {
          label: "Display", path: "table/display",
          children: [
            {
              label: "Default", path: "table/display",
              children: [],
            },
            {
              label: "List", path: "table/display/list",
              children: [],
            },
            {
              label: "Card", path: "table/display/card",
              children: [],
            }
          ],
        }
      ],
    },{
      label: "Button", path: "button",
      children: [
        {
          label: "Solid", path: "button/solid",
          children: [],
        },
        {
          label: "Outline", path: "button/outline",
          children: [],
        },
        {
          label: "Link", path: "button/link",
          children: [],
        },
        {
          label: "Disabled", path: "button/disabled",
          children: [],
        },
        {
          label: "Size", path: "button/size",
          children: [],
        },
        {
          label: "Border", path: "button/border",
          children: [],
        },
        {
          label: "Icon", path: "button/icon",
          children: [],
        }
      ],
    }]

  export default menus
