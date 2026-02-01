'use client';

import { 
    AreaChart, 
    Area, 
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const ProductSales = [
    {name: "Ene",  producto1:4000, producto2:2400},
    {name: "Feb",  producto1:3000, producto2:3600},
    {name: "Mar",  producto1:500, producto2:1500},
    {name: "Abr",  producto1:800, producto2:1000},
    {name: "May",  producto1:1750, producto2:2450},
    {name: "Jun",  producto1:900, producto2:2100},
]

const AreaChartComponent = () => {
    return (
        <ResponsiveContainer>
            <AreaChart 
                width={500} 
                height={400} 
                data={ProductSales}
                margin={{right:30}}
            >
                <YAxis/>
                <XAxis dataKey="name"/>
                <CartesianGrid strokeDasharray="5 5"/>
                <Tooltip content={<CustomTooltip/>}/>
                <Legend/>
                <Area 
                    type="monotone" 
                    dataKey="producto1"
                    stroke="#2563eb"
                    fill="#3b82f6"
                    stackId={1}
                />

                <Area 
                    type="monotone" 
                    dataKey="producto2"
                    stroke="#7c3aed"
                    fill="#8b5cf6"
                    stackId={1}
                />
            </AreaChart>
        </ResponsiveContainer>
    )
};

const CustomTooltip = ({ active, payload, label }) => {
    if(active && payload && payload.length){
        return(
            <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                <p className="text-medium text-lg">{label}</p>
                <p className="text-sm text-blue-400">
                    Renta:
                    <span className="ml-2">${payload[0].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                    Ganancia:
                    <span className="ml-2">${payload[1].value}</span>
                </p>
            </div>
        );
    }
};

export default AreaChartComponent;