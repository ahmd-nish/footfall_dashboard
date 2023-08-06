import React from "react";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        name: "Store A",
        uv: 590,
        Rise: 80,
        amt: 1400,
        cnt: 490
    },
    {
        name: "Store B",
        uv: 868,
        Rise: 67,
        amt: 1506,
        cnt: 590
    },
    {
        name: "Store C",
        uv: 1397,
        Rise: 84,
        amt: 989,
        cnt: 350
    },
    {
        name: "Store D",
        uv: 1480,
        Rise: 70,
        amt: 1228,
        cnt: 480
    },
    {
        name: "Store E",
        uv: 1520,
        Rise: 85,
        amt: 1100,
        cnt: 460
    }
];

const VerticalComposedChart = () => {
    return (
        <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer>
                <ComposedChart
                    layout="vertical"
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" scale="band" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Rise" barSize={20} fill="#413ea0" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}

export default VerticalComposedChart;