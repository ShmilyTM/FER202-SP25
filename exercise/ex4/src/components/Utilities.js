import React from 'react';
import '../styles/Utilities.css';

function Utilities() {
    const sumUnknown = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

    const collectArgs = (...args) => {
        const result = [];
        args.forEach(arg => {
            if (Array.isArray(arg)) {
                result.push(...arg);
            } else {
                result.push(arg);
            }
        });
        return result;
    };

    return (
        <div className="utilities">
            <h2>Utilities</h2>
            <p>Sum of Numbers (1, 2, 3, 4): {sumUnknown(1, 2, 3, 4)}</p>
            <p>
                Collect Arguments ([1, 2], 3, [4, 5]):{' '}
                {JSON.stringify(collectArgs([1, 2], 3, [4, 5]))}
            </p>
        </div>
    );
}

export default Utilities;
