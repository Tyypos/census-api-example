import { states } from '../helpers/stateHelpers';

const StateSelector = ({ onChange }) => {
    return (
        <div className="relative">
            <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-300 mb-1"
            >
                Select a state
            </label>
            <select
                id="state"
                name="state"
                onChange={(e) => onChange(e.target.value)}
                className="block w-full appearance-none rounded-lg border border-gray-700 bg-[#0d1117] text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 px-4 py-2 pr-10"
            >
                <option value="">-- Choose a state --</option>
                {states.sort().map((state) => (
                    <option key={state} value={state}>
                        {state}
                    </option>
                ))}
            </select>

            {/* Custom dropdown arrow */}
            <div className="pointer-events-none absolute right-3 top-[38px] text-white">
                <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        </div>
    );
};

export default StateSelector;
