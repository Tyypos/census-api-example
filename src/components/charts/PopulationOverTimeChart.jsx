import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';
import { useCensusStore } from '../../stores/useCensusStore';
import Loader from '../Loader';

const PopulationOverTimeChart = () => {
    const censusHistory = useCensusStore((state) => state.censusHistory);
    const loading = useCensusStore((state) => state.loading);

    const populations = censusHistory.map((d) => d.population);
    const minPop = Math.min(...populations);
    const maxPop = Math.max(...populations);

    return (
        <div className="border border-gray-800 rounded-sm p-4 text-center w-full min-h-[200px] flex flex-col justify-center bg-gray-900">
            {loading ? (
                <Loader />
            ) : censusHistory ? (
                <div>
                    <h2 className="mb-4 text-gray-300">Population Over Time</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            data={censusHistory}
                            margin={{
                                top: 0,
                                right: 0,
                                left: 30,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#444"
                            />
                            <XAxis
                                dataKey="year"
                                stroke="#ccc"
                                tick={{ fontSize: 12 }}
                            />
                            <YAxis
                                domain={[minPop - 10000, maxPop + 10000]}
                                tickFormatter={(val) => val.toLocaleString()}
                                stroke="#ccc"
                            />
                            <Tooltip
                                formatter={(value) => [
                                    value.toLocaleString(),
                                    'Population',
                                ]}
                                labelFormatter={(label) => `Year: ${label}`}
                            />
                            <Line
                                type="monotone"
                                dataKey="population"
                                stroke="#38bdf8"
                                strokeWidth={2}
                                dot={{ r: 3 }}
                                activeDot={{ r: 5 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            ) : (
                <div className="text-gray-400">No data available.</div>
            )}
        </div>
    );
};

export default PopulationOverTimeChart;
