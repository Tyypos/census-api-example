import { useCensusStore } from '../../stores/useCensusStore';
import Loader from '../Loader';
import CountUpDisplay from '../CountUpDisplay';

const MedianIncomeChart = () => {
    const { censusData, loading } = useCensusStore();

    return (
        <div className="border border-gray-800 rounded-sm p-4 text-center w-full min-h-[200px] flex flex-col justify-center bg-gray-900">
            {loading ? (
                <Loader />
            ) : censusData ? (
                <div className="text-white">
                    <h3 className="text-gray-300">Median Income</h3>
                    <div className="lg:text-[3.5rem] text-[2.5rem] leading-none">
                        <CountUpDisplay
                            value={censusData.medianIncome}
                            loading={loading}
                            prefix="$"
                        />
                    </div>
                </div>
            ) : (
                <div className="text-gray-400">No data available.</div>
            )}
        </div>
    );
};

export default MedianIncomeChart;
