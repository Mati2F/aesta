'use client';

import {useEffect, useState} from "react"

import { 
    LineChart, 
    Line, 
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const LineChartComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
            fetch("http://localhost:8000/api/chart-data")
                .then(res => res.json())
                .then(json => setData(json.data));
        }, []);

    return (
        <ResponsiveContainer>
            <LineChart 
                width={500} 
                height={400} 
                data={data}
                margin={{right:30}}
            >
                <YAxis/>
                <XAxis dataKey="nombre"/>
                <CartesianGrid strokeDasharray="5 5"/>
                <Tooltip content={<CustomTooltip/>}/>
                <Legend/>
                <Line 
                    type="monotone" 
                    dataKey="valor"
                    stroke="#2563eb"
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    )
};

const CustomTooltip = ({ active, payload, label }) => {
    if(active && payload && payload.length){
        return(
            <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                <p className="text-medium text-lg">{label}</p>
                <p className="text-sm text-blue-400">
                    Valor:
                    <span className="ml-2">${payload[0].value}</span>
                </p>
            </div>
        );
    }
};

export default LineChartComponent;