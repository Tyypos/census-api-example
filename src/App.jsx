import { useCensusStore } from './stores/useCensusStore';
import StateSelector from './components/StateSelector';
import PopulationChart from './components/charts/PopulationChart';
import MedianAgeChart from './components/charts/MedianAgeChart';
import MedianIncomeChart from './components/charts/MedianIncomeChart';
import PopulationOverTimeChart from './components/charts/PopulationOverTimeChart';
import MedianIncomeOverTimeChart from './components/charts/MedianIncomeOverTimeChart';
import MedianAgeOverTimeChart from './components/charts/MedianAgeOverTimeChart';
import About from './components/About';

const App = () => {
    const { selectedState, setSelectedState } = useCensusStore();

    const onStateSelected = (selectedState) => {
        console.log('send to analytics', {
            event: 'selected-state',
            value: selectedState,
        });

        setSelectedState(selectedState);
    };

    return (
        <div className="md:p-10 py-10 px-4">
            {/* header  */}
            <section className="mb-6 text-center">
                <h1 className="md:text-5xl text-4xl text-gray-300 mb-6">
                    Census API Example
                </h1>
                <About />
                <div className="border-t border-t-gray-600 mb-4"></div>
            </section>

            {/* state selector control  */}
            <div className="md:max-w-xs w-full mb-8">
                <StateSelector onChange={onStateSelected} />
            </div>

            {selectedState ? (
                // charts view
                <div className="flex flex-col gap-8">
                    <div className="flex gap-8 md:flex-row flex-col">
                        <div className="w-full">
                            <PopulationChart />
                        </div>
                        <div className="w-full">
                            <MedianIncomeChart />
                        </div>
                        <div className="w-full">
                            <MedianAgeChart />
                        </div>
                    </div>
                    <div className="w-full">
                        <PopulationOverTimeChart />
                    </div>
                    <div className="w-full">
                        <MedianIncomeOverTimeChart />
                    </div>
                    <div className="w-full">
                        <MedianAgeOverTimeChart />
                    </div>
                </div>
            ) : (
                // no state selected view
                <div className="p-10 h-[50vh] text-center flex flex-col justify-center">
                    <div className="md:text-2xl text-xl text-gray-700">
                        Select a state to get started
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
