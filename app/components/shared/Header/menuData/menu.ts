import { dropDownCol, dropDownSportData, dropdownSexualData } from "@/app/components/Home/dummyData/dropdown"
import { AppPathnames } from "@/app/utils/AppConfig"

export type MenuItem = {
    name: string,
    link: AppPathnames,
    dropdownMenu: Array<dropDownCol>

}
export const menuData: Array<MenuItem> = [{
    name: 'men',
    link: '/men',
    dropdownMenu: dropdownSexualData,
}, {
    name: 'women', 
    link: '/women',
    dropdownMenu: dropdownSexualData,

},
{
    name: 'sports',
    link: '/sports',
    dropdownMenu: dropDownSportData,

}, {
    name: 'casuals',
    link: '/casuals',
    dropdownMenu: [],

},]