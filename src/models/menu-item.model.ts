import { StyleValue } from "nuxt/dist/app/compat/capi"

export interface MenuItem {
    to?: string
    url?: string
    icon?: string
    label?: string
    badge?: string
    target?: string
    items?: MenuItem[]
    command?: Function
    style?: StyleValue
    disabled?: boolean
    className?: string
    separator?: boolean
    visible?: Function | boolean
}