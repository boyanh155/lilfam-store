import { dropDownCol, dropDownSportData, dropdownSexualData } from "@/app/components/Home/dropdownData/data"

export type MenuItem = {
    name: string,
    link: string,
    dropdownMenu: Array<dropDownCol>

}
export const menuData: Array<MenuItem> = [{
    name: 'men',
    link: 'men',
    dropdownMenu: dropdownSexualData,
}, {
    name: 'women',
    link: 'women',
    dropdownMenu: dropdownSexualData,

},
{
    name: 'sports',
    link: 'sports',
    dropdownMenu: dropDownSportData,

}, {
    name: 'casuals',
    link: 'casuals',
    dropdownMenu: [],

},]