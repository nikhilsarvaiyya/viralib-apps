const CreateChild = (data, subMenu) => {

  let child = []
  for (let i = 0; i < subMenu.length; i++) {
    child.push({
      label: String(subMenu[i]).charAt(0).toUpperCase() + String(subMenu[i]).slice(1),
      path: `${data.path}/${subMenu[i].replace(" ", "-").toLowerCase()}`,
      children: []
    })
  }
  return child
}
// Main Menu List
let menus = [
  { label: "Avatar", path: "avatar" },
  {
    label: "Button", path: "button",
    children: [
      { label: "Icon", path: "button/icon" }
    ],
  },
  {
    label: "Table", path: "table",
    children: [
      { label: "Display", path: "table/display" }
    ],
  }]

// Sub Menu list
const table = ['row', 'column', 'option', 'toolbar', 'action', 'dropdown', 'display'];
const tableDisplay = ['table', 'list', 'card']
const button = ['solid', 'outline', 'link', 'disabled', 'size', 'border', 'icon']
const buttonIcon = ['Start Label',"End Label", "Colored"]
const avatar = ['rounded', 'squared','grouped']
const avatarSubmenu = []

menus.map(menu => {
  if (menu.path === 'avatar') {
    menu.children = CreateChild(menu, avatar)
  }
  if (menu.path === 'button') {
    menu.children = CreateChild(menu, button);
  }
  if (menu.path === 'table') {
    menu.children = CreateChild(menu, table)
  }

  menu.children.map(subMenu => {
    if (subMenu.label.toLowerCase() === 'icon') {
      subMenu.children = CreateChild(subMenu, buttonIcon)
    }
    if (subMenu.label.toLowerCase() === 'display') {
      subMenu.children = CreateChild(subMenu, tableDisplay)
    }
  })

  return menu
})



export default menus
