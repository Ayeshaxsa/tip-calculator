import { useMemo, useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(15);
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState(1);

  const tipAmount = useMemo(() => {
    const billValue = Number(bill);

    if (!billValue || billValue <= 0) {
      return 0;
    }

    return (billValue * tip) / 100;
  }, [bill, tip]);

  const grandTotal = useMemo(() => {
    const billValue = Number(bill);

    if (!billValue || billValue <= 0) {
      return 0;
    }

    return billValue + tipAmount;
  }, [bill, tipAmount]);

  const perPerson = useMemo(() => {
    const peopleValue = Number(people);

    if (!peopleValue || peopleValue <= 0) {
      return 0;
    }

    return grandTotal / peopleValue;
  }, [grandTotal, people]);

  const handlePresetTip = (value) => {
    setTip(value);
    setCustomTip("");
  };

  const handleCustomTip = (e) => {
    const value = e.target.value;

    setCustomTip(value);

    if (value === "") {
      return;
    }

    setTip(Number(value));
  };

  const handleReset = () => {
    setBill("");
    setTip(15);
    setCustomTip("");
    setPeople(1);
  };

  return (
    <main className="app">
      <section className="calculator">
        <h1>Tip Calculator</h1>

        <div className="form-group">
          <label htmlFor="bill">Bill Amount (₹)</label>

          <input
            id="bill"
            type="number"
            placeholder="Enter bill amount"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Select Tip %</label>

          <div className="tip-buttons">
            {[10, 15, 20].map((value) => (
              <button
                key={value}
                className={tip === value && customTip === "" ? "active" : ""}
                onClick={() => handlePresetTip(value)}
              >
                {value}%
              </button>
            ))}
          </div>

          <input
            type="number"
            placeholder="Custom tip %"
            value={customTip}
            onChange={handleCustomTip}
          />
        </div>

        <div className="form-group">
          <label htmlFor="people">Number of People</label>

          <input
            id="people"
            type="number"
            placeholder="Enter number of people"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>

        <section className="summary" aria-live="polite">
          <div className="summary-row">
            <span>Total Tip</span>
            <strong>₹{tipAmount.toFixed(2)}</strong>
          </div>

          <div className="summary-row">
            <span>Grand Total</span>
            <strong>₹{grandTotal.toFixed(2)}</strong>
          </div>

          <div className="summary-row">
            <span>Per Person</span>
            <strong>₹{perPerson.toFixed(2)}</strong>
          </div>
        </section>

        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </section>
    </main>
  );
}
