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
  }]

// Sub Menu list

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
  

  menu?.children?.map(subMenu => {
    if (subMenu.label.toLowerCase() === 'icon') {
      subMenu.children = CreateChild(subMenu, buttonIcon)
    }
  })

  return menu
})



export default menus
