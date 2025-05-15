import { useEffect, useState } from 'react';

const CountUpDisplay = ({
    value,
    loading,
    prefix = '',
    suffix = '',
    formatFn = (v) => v.toLocaleString(),
    stepDivisor = 30,
    intervalMs = 30,
}) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (loading || value == null) return;

        let current = 0;
        const step = Math.ceil(value / stepDivisor);

        const interval = setInterval(() => {
            current += step;
            if (current >= value) {
                clearInterval(interval);
                setDisplayValue(value);
            } else {
                setDisplayValue(current);
            }
        }, intervalMs);

        return () => clearInterval(interval);
    }, [value, loading, stepDivisor, intervalMs]);

    return (
        <div className="text-5xl">
            {prefix}
            {formatFn(displayValue)}
            {suffix}
        </div>
    );
};

export default CountUpDisplay;
