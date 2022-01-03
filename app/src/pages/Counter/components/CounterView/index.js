const CounterView = ({
    countValue,
    handleIncrement,
    handleDecrement,
    handleReset,
}) => {
    return (
        <div>
            <div>Value: {countValue}</div>

            <div>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export { CounterView };
