import { useMemo, useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(15);
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState(1);

  const billValue = Number(bill);
  const peopleValue = Number(people);

  // ---------------- VALIDATION ----------------

  const billError =
    bill !== "" && billValue <= 0 ? "Bill must be greater than 0" : "";

  const peopleError =
    people !== "" && (peopleValue < 1 || !Number.isInteger(peopleValue))
      ? "People must be a whole number ≥ 1"
      : "";

  const tipError =
    tip < 0 || tip > 100 ? "Tip must be between 0% and 100%" : "";

  const isValid = !billError && !peopleError && !tipError;

  // ---------------- CALCULATIONS ----------------

  const tipAmount = useMemo(() => {
    if (!isValid || !billValue) return 0;
    return (billValue * tip) / 100;
  }, [billValue, tip, isValid]);

  const grandTotal = useMemo(() => {
    if (!isValid || !billValue) return 0;
    return billValue + tipAmount;
  }, [billValue, tipAmount, isValid]);

  const perPerson = useMemo(() => {
    if (!isValid || peopleValue < 1) return 0;
    return grandTotal / peopleValue;
  }, [grandTotal, peopleValue, isValid]);

  // ---------------- HANDLERS ----------------

  const handlePresetTip = (value) => {
    setTip(value);
    setCustomTip("");
  };

  const handleCustomTip = (e) => {
    const value = e.target.value;
    setCustomTip(value);

    if (value === "") return;

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

        {/* BILL */}
        <div className="form-group">
          <label>Bill Amount (₹)</label>

          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            placeholder="Enter bill amount"
          />

          {billError && <p className="error">{billError}</p>}
        </div>

        {/* TIP */}
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
            value={customTip}
            onChange={handleCustomTip}
            placeholder="Custom tip %"
          />

          {tipError && <p className="error">{tipError}</p>}
        </div>

        {/* PEOPLE */}
        <div className="form-group">
          <label>Number of People</label>

          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            placeholder="Enter number of people"
          />

          {peopleError && <p className="error">{peopleError}</p>}
        </div>

        {/* OUTPUT */}
        <section
          className="summary"
          aria-live="polite"
          aria-label="Calculation results"
        >
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
            <strong>
              {peopleValue < 1 || !isValid ? "—" : `₹${perPerson.toFixed(2)}`}
            </strong>
          </div>
        </section>

        <button className="reset-btn" onClick={handleReset} type="button">
          Reset
        </button>
      </section>
    </main>
  );
}
