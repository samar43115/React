function InputBox({
    label,
    className = "",
    amount,
    onAmountChange,
    selectedCurrency,
    onCurrencyChange,
    currencyOptions = [],
    disableAmount = false

}) {
    return (
        <div className={`bg-white flex text-sm rounded-lg p-3 ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    type="number"
                    className="w-full outline-none  py-1.5"
                    placeholder="Amount"
                    value={amount}
                    disabled={disableAmount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full ">Currency Type</p>
                <select
                    className="rounded-lg bg-gray-500 outline-none cursor-pointer py-1 px-1"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => {
                        return (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        )
                    })}

                </select>

            </div>
        </div>
    )
}

export default InputBox