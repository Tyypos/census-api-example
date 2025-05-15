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

const MedianAgeOverTimeChart = () => {
    const censusHistory = useCensusStore((state) => state.censusHistory);
    const loading = useCensusStore((state) => state.loading);

    const medianAge = censusHistory.map((d) => d.medianAge);
    const minPop = Math.min(...medianAge);
    const maxPop = Math.max(...medianAge);

    return (
        <div className="border border-gray-800 rounded-sm p-4 text-center w-full min-h-[200px] flex flex-col justify-center bg-gray-900">
            {loading ? (
                <Loader />
            ) : censusHistory ? (
                <div>
                    <h2 className="mb-4 text-gray-300">Median Age Over Time</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={censusHistory}>
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
                                domain={[minPop, maxPop]}
                                tickFormatter={(val) => val.toLocaleString()}
                                stroke="#ccc"
                            />
                            <Tooltip
                                formatter={(value) => [
                                    value.toLocaleString(),
                                    'Median Age',
                                ]}
                                labelFormatter={(label) => `Year: ${label}`}
                            />
                            <Line
                                type="monotone"
                                dataKey="medianAge"
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

export default MedianAgeOverTimeChart;
