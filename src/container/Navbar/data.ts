import { BsFillBellFill, BsFillBookmarkFill, BsFillPersonFill, BsGridFill } from "react-icons/bs";
import { RiParentFill } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";
import { ImExit } from "react-icons/im";

const navbarData = [
    {
        path: '/dashboard',
        label: 'Home',
        Icon: BsGridFill,
        alt: 'home_icon'
    },
    {
        path: '/dashboard/bookmark',
        label: 'Bookmark',
        Icon: BsFillBookmarkFill,
        alt: 'bookmark_icon'
    },
    {
        path: '/dashboard/notification',
        label: 'Notification',
        Icon: BsFillBellFill,
        alt: 'notification_icon'
    },
    {
        path: '/dashboard/profile',
        label: 'Profile',
        Icon: BsFillPersonFill,
        alt: 'profile_icon'
    },
    {
        path: '/dashboard/parent_connect',
        label: 'Parent Connect',
        Icon: RiParentFill,
        alt: 'parentContact_icon'
    },
    {
        path: '/dashboard/subscription',
        label: 'Subscription',
        Icon: IoDiamond,
        alt: 'subscription_icon'
    },
    {
        path: '/dashboard/signout',
        label: 'Sign Out',
        Icon: ImExit,
        alt: 'signout_icon'
    },
    
];

export {navbarData}