import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IaIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
    title : "Home",
    path:"/",
    icon: <AiIcons.AiFillHome />,
    iconClosed:<RiIcons.RiArrowDownSFill />,
    iconOpened:<RiIcons.RiArrowUpSFill />,
    subNav:[
        {
            title : "Home",
            path:"/home1",
            icon: <AiIcons.AiFillHome />,
        },
    ]
},
{
    title : "About",
    path:"/About",
    icon: <AiIcons.AiFillHome />,
    iconClosed:<RiIcons.RiArrowDownSFill />,
    iconOpened:<RiIcons.RiArrowUpSFill />,
},
{
    title : "FreeDiving",
    path:"/FreeDiving",
    icon: <AiIcons.AiFillHome />,
    iconClosed:<RiIcons.RiArrowDownSFill />,
    iconOpened:<RiIcons.RiArrowUpSFill />,
    subNav:[
        {
            title : "Aida",
            path:"/FreeDiving/Aida",
            icon: <AiIcons.AiFillHome />,
        },
        {
            title : "Molchanovs",
            path:"/FreeDiving/Molchanovs",
            icon: <AiIcons.AiFillHome />,
        },
    ]
},
{
    title : "TOEFL",
    path:"/TOEFL",
    icon: <AiIcons.AiFillHome />,
    iconClosed:<RiIcons.RiArrowDownSFill />,
    iconOpened:<RiIcons.RiArrowUpSFill />,
    subNav:[
        {
            title : "Reading",
            path:"/TOEFL/Reading",
            icon: <AiIcons.AiFillHome />,
        },
        {
            title : "Listening",
            path:"/TOEFL/Listening",
            icon: <AiIcons.AiFillHome />,
        },
        {
            title : "Speaking",
            path:"/TOEFL/Speaking",
            icon: <AiIcons.AiFillHome />,
        },
        {
            title : "Writing",
            path:"/TOEFL/Writing",
            icon: <AiIcons.AiFillHome />,
        },
    ]
}
]