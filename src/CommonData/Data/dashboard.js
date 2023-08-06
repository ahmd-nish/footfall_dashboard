// Import Images
import img2 from "../../assets/images/users/avatar-2.jpg";
import img3 from "../../assets/images/users/avatar-3.jpg";
import img6 from "../../assets/images/users/avatar-6.jpg";
import img4 from "../../assets/images/users/avatar-4.jpg";


// Latest Transation 

const LatestTransationData = [
    {
        id: "store1",
        storeName: "David Wiley Store",
        salesRevenue: "122334",
        vsSalesRevenue: "12",
        salesConversion: "1",
        vsSalesConversion: "10",
        footfall: "1000",
        vsFootfall: "5",
        avgDwellTime: "30",
        vsAvgDwellTime: "2",
        color: "success"
    },
    {
        id: "store2",
        storeName: "Walter Jones Store",
        salesRevenue: "823242",
        vsSalesRevenue: "32",
        salesConversion: "2",
        vsSalesConversion: "15",
        footfall: "2000",
        vsFootfall: "10",
        avgDwellTime: "45",
        vsAvgDwellTime: "4",
        color: "success"
    },
    {
        id: "store3",
        storeName: "Eric Ryder Store",
        salesRevenue: "1154353",
        vsSalesRevenue: "-10",
        salesConversion: "1",
        vsSalesConversion: "-5",
        footfall: "1500",
        vsFootfall: "-3",
        avgDwellTime: "35",
        vsAvgDwellTime: "-1",
        color: "danger"
    },
    {
        id: "store4",
        storeName: "Kenneth Jackson Store",
        salesRevenue: "1334365",
        vsSalesRevenue: "18",
        salesConversion: "1",
        vsSalesConversion: "7",
        footfall: "1800",
        vsFootfall: "6",
        avgDwellTime: "40",
        vsAvgDwellTime: "3",
        color: "success"
    },
    {
        id: "store5",
        storeName: "Ronnie Spiller Store",
        salesRevenue: "743460",
        vsSalesRevenue: "-23",
        salesConversion: "2",
        vsSalesConversion: "-8",
        footfall: "2100",
        vsFootfall: "-9",
        avgDwellTime: "50",
        vsAvgDwellTime: "-2",
        color: "danger"
    },
];


// Order Status
const OrderStatusData = [
    {
        id: 1,
        title: "Completed",
        icon: "ri-checkbox-circle-line",
        color: "green",
        width: "70",
    },
    {
        id: 2,
        title: "Pending",
        icon: "ri-calendar-2-line",
        color: "warning",
        width: "45",
    },
    {
        id: 3,
        title: "Cancel",
        icon: "ri-close-circle-line",
        color: "red",
        width: "19",
    },
]

// Overview

const OverViewData = [
    {
        id: 1,
        title: "Expenses",
        count: "8,524",
        percentage: "1.2",
        color: "primary"
    },
    {
        id: 2,
        title: "Maintenance",
        count: "8,524",
        percentage: "2.0",
        color: "light"
    },
    {
        id: 3,
        title: "Profit",
        count: "8,524",
        percentage: "0.4",
        color: "red"
    },
];

// SocialSource

const SocialSourceData = [
    {
        id: 1,
        title: "Facebook",
        count: "125",
        icon: "ri ri-facebook-circle-fill",
        bgcolor: "primary"
    },
    {
        id: 2,
        title: "Twitter",
        count: "112",
        icon: "ri ri-twitter-fill text-white",
        bgcolor: "info"
    },
    {
        id: 3,
        title: "Instagram",
        count: "104",
        icon: "ri ri-instagram-line text-white",
        bgcolor: "red"
    },
];
 
// Notifications

const NotificationsData = [
    {
        id:1,
        name:"Scott Elliott",
        desc:"If several languages coalesce",
        time:" 20 min ago",
        src:img2,        
    },
    {
        id:2,
        name:"Team A",
        desc:"Team A Meeting 9:15 AM",
        time:"9:00 am",
        icon:"mdi mdi-account-supervisor"
    },
    {
        id:3,
        name:"Frank Martin",
        desc:"Neque porro quisquam est",
        time:" 8:54 am",
        src:img3,        
    },{
        id:4,
        name:"Updates",
        desc:"It will be as simple as fact",
        time:"27-03-2020",
        icon:"mdi mdi-email-outline"       
    },{
        id:5,
        name:"Terry Garrick",
        desc:"At vero eos et accusamus et",
        time:"27-03-2020",
        src:img4,        
    }

];


export { LatestTransationData, OrderStatusData, OverViewData, SocialSourceData, NotificationsData }