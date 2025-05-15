import { create } from 'zustand';
import { stateNameToFips } from '../helpers/stateHelpers';

export const useCensusStore = create((set) => ({
    selectedState: null,
    censusData: null,
    censusHistory: [],
    loading: false,
    error: null,

    setSelectedState: async (stateName) => {
        set({ selectedState: stateName, loading: true, error: null });

        const fips = stateNameToFips[stateName];
        if (!fips) {
            set({ loading: false, error: 'Invalid state selected' });
            return;
        }

        const years = [2019, 2018, 2017, 2016, 2015];

        try {
            // api does not allow for data for date range, must call for each year
            const results = await Promise.all(
                years.map(async (year) => {
                    const res = await fetch(
                        `https://api.census.gov/data/${year}/acs/acs1?get=NAME,B01003_001E,B19013_001E,B01002_001E&for=state:${fips}`
                    );
                    const json = await res.json();
                    const [_, pop, income, age] = json[1];
                    return {
                        year,
                        population: parseInt(pop, 10),
                        medianIncome: parseInt(income, 10),
                        medianAge: parseFloat(age),
                    };
                })
            );

            // Sort results ascending by year
            const sortedHistory = results.sort((a, b) => a.year - b.year);

            // Take the most recent entry for current values
            const latest = sortedHistory[sortedHistory.length - 1];

            set({
                censusData: latest,
                censusHistory: sortedHistory,
                loading: false,
                error: null,
            });
        } catch (err) {
            console.error('Failed to fetch Census data', err);
            set({ loading: false, error: 'Failed to load census data' });
        }
    },
}));
