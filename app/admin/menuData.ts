import { Category, Home, Person } from "@mui/icons-material"
import { ReactNode } from "react"

export type menuItem ={
    icon: any,
    name: string,
    link: string,
}
export const menuData: Array<menuItem> = [{
    icon: Home,
    name: 'Dashboard',
    link: 'dash-board'
}, {
    icon: Person,
    name: 'Users',
    link: 'users'
}, {
    icon:Category,
    name: 'Products',
    link: 'products'
},]