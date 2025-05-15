import { useState } from 'react';

const About = () => {
    const [showAbout, setShowAbout] = useState(true);

    return (
        <>
            {showAbout && (
                <div className="text-gray-400 max-w-4xl m-auto text-left leading-relaxed mb-6 border border-gray-400 rounded-sm p-4">
                    <div className="text-right -mt-2 mb-2">
                        <span
                            className="hover:underline cursor-pointer text-xl"
                            onClick={() => setShowAbout(false)}
                        >
                            x
                        </span>
                    </div>
                    This example project is a modern and lightweight React
                    application that visualizes U.S. Census data using the{' '}
                    <a
                        href="https://api.census.gov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-400"
                    >
                        api.census.gov
                    </a>
                    . It uses data from the American Community Survey (ACS) for
                    the years 2015–2019, focusing on key indicators such as
                    population, median income and median age.
                    <br />
                    <br />
                    It's built with <strong>React 19</strong>,{' '}
                    <strong>Vite</strong>, <strong>Zustand</strong> for state
                    management, and <strong>Recharts</strong> for
                    visualizations. Styled with <strong>Tailwind CSS</strong>.
                    <br />
                    <br />
                    Note: More recent census data is not currently available
                    through the API used here.
                    <br />
                    <br />
                    Thanks for checking it out!
                    <br />
                    -Jared
                </div>
            )}
        </>
    );
};

export default About;
