export interface MenuItem {
    route?: string;
    displayName: string;
    icon: string;
    children?: MenuItem[];
    open?:boolean;
}