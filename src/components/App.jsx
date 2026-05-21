export default function App() {
    return (
      <main className="app">
        <section className="calculator">
          <h1>Tip Calculator</h1>
          <div className="form-group">
            <label htmlFor="bill">Bill Amount ($) </label>
            <input id="bill" type="number" placeholder="Enter bill amount" />
          </div>

          <div className="form-group">
            <label>Select Tip % </label>
            <div className="tip-buttons">
              <button>10%</button>
              <button>15%</button>
              <button>20%</button>
            </div>

            <input type="number" placeholder="Custom tip % " />
          </div>

          <div className="form-group">
            <label htmlFor="people">Number of People</label>
            <input
              id="people"
              type="number"
              placeholder="Enter Number of People"
            />
          </div>

          <section className="summary">
            <div className="summary-row">
              <span>Total Tip</span>
              <strong> $0.00 </strong>
            </div>

            <div className="summary-row">
              <span>Grand Total</span>
              <strong> $0.00 </strong>
            </div>

            <div className="summary-row">
              <span>Per Person</span>
              <strong> $0.00 </strong>
            </div>
          </section>

          <button className="reset-btn">Reset</button>
        </section>
      </main>
    );
}