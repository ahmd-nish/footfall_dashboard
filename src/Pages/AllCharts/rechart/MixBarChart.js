import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        name: "Mon",
        Footfall: 4000,
       
    },
    {
        name: "Tue",
        Footfall: 3000,
    
    },
    {
        name: "Wed",
        Footfall: 2000,
     
    },
    {
        name: "Thurs",
        Footfall: 2780,
      
    },
    {
        name: "Fri",
        Footfall: 1890,
       
    },
    {
        name: "Sat",
        Footfall: 2390,
      
    },
    {
        name: "Sun",
        Footfall: 3490,
       
    }
];

const MixBarChart = () => {
    return (
        <div style={{ width: '100%', height: 220 }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Footfall" fill="#FFc658" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default MixBarChart;