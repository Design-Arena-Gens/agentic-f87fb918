"use client";

import { useMemo, useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [avgTicket, setAvgTicket] = useState(45);
  const [monthlyTx, setMonthlyTx] = useState(1200);

  const price = useMemo(() => (billing === "monthly" ? 49 : 39), [billing]);

  const competitorFeePct = 2.9; // % + 30c typical
  const flowFeePct = 2.4; // promotional
  const savings = useMemo(() => {
    const competitor = (avgTicket * monthlyTx) * (competitorFeePct / 100);
    const flow = (avgTicket * monthlyTx) * (flowFeePct / 100);
    const diff = Math.max(0, competitor - flow);
    return Math.round(diff);
  }, [avgTicket, monthlyTx]);

  function handleDemo() {
    const target = email.trim() || "demo@flowpos.io";
    const subject = encodeURIComponent("FlowPOS Demo Request");
    const body = encodeURIComponent(`Hi FlowPOS,\n\nI'd love a demo. My email: ${target}.\n`);
    window.location.href = `mailto:sales@flowpos.io?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <img src="/logo.svg" alt="FlowPOS" />
            <span>FlowPOS</span>
          </div>
          <div className="muted">Run smarter checkouts</div>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">New: Tap to Pay on Android</span>
            <h1 className="h1">
              The POS that feels like <span className="gradient">fintech</span>
            </h1>
            <p className="lead">
              Card-present payments, instant payouts, unified inventory, and painless reconciliation ? all in one modern POS built for multi-location retailers.
            </p>
            <div className="input-row">
              <input
                className="input"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Work email"
              />
              <button className="button" onClick={handleDemo}>Get a demo</button>
            </div>
            <div className="kpi">
              <div className="item"><div className="num"><span className="gradient">99.995%</span></div><div className="muted">Uptime</div></div>
              <div className="item"><div className="num">T+<span className="gradient">1</span></div><div className="muted">Payouts</div></div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <img src="/pos-illustration.svg" alt="POS" style={{ width: '100%', borderRadius: 12 }}/>
              <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="muted">Billing</span>
                  <div className="toggle">
                    <button className={billing === 'monthly' ? 'active' : ''} onClick={() => setBilling('monthly')}>Monthly</button>
                    <button className={billing === 'yearly' ? 'active' : ''} onClick={() => setBilling('yearly')}>Yearly</button>
                  </div>
                </div>
                <div className="pricing">
                  <div className="card" style={{ borderColor: 'rgba(79,140,255,0.35)' }}>
                    <div className="card-inner">
                      <div className="muted">Starter</div>
                      <div style={{ fontSize: 36, fontWeight: 800, margin: '6px 0' }}>${price}<span className="muted" style={{ fontSize: 14 }}>/mo</span></div>
                      <ul className="list">
                        <li><span className="check">?</span> In-person cards</li>
                        <li><span className="check">?</span> Inventory & receipts</li>
                        <li><span className="check">?</span> Email support</li>
                      </ul>
                      <button className="button" style={{ width: '100%', marginTop: 12 }} onClick={handleDemo}>Start now</button>
                    </div>
                  </div>
                  <div className="card" style={{ borderColor: 'rgba(21,209,161,0.35)' }}>
                    <div className="card-inner">
                      <div className="muted">Scale</div>
                      <div style={{ fontSize: 36, fontWeight: 800, margin: '6px 0' }}>${price + 50}<span className="muted" style={{ fontSize: 14 }}>/mo</span></div>
                      <ul className="list">
                        <li><span className="check">?</span> All Starter features</li>
                        <li><span className="check">?</span> Multi-location</li>
                        <li><span className="check">?</span> Advanced analytics</li>
                      </ul>
                      <button className="button" style={{ width: '100%', marginTop: 12 }} onClick={handleDemo}>Talk to sales</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container grid-3">
          <div className="card"><div className="card-inner">
            <div className="muted">Savings calculator</div>
            <div style={{ marginTop: 12 }}>
              <label className="muted" htmlFor="ticket">Average ticket: ${avgTicket}</label>
              <input id="ticket" className="input" type="range" min={5} max={200} value={avgTicket} onChange={(e) => setAvgTicket(parseInt(e.target.value))} />
            </div>
            <div style={{ marginTop: 12 }}>
              <label className="muted" htmlFor="tx">Monthly transactions: {monthlyTx}</label>
              <input id="tx" className="input" type="range" min={100} max={5000} step={50} value={monthlyTx} onChange={(e) => setMonthlyTx(parseInt(e.target.value))} />
            </div>
            <div className="kpi">
              <div className="item"><div className="num">${savings.toLocaleString()}</div><div className="muted">Est. monthly savings</div></div>
              <div className="item"><div className="num">{(flowFeePct).toFixed(1)}%</div><div className="muted">FlowPOS fee</div></div>
            </div>
          </div></div>

          <div className="card"><div className="card-inner">
            <div className="muted">Why FlowPOS</div>
            <ul className="list">
              <li><span className="check">?</span> Tap, chip, swipe ? fast authorizations</li>
              <li><span className="check">?</span> Offline mode with smart retries</li>
              <li><span className="check">?</span> Unified catalog & stock counts</li>
              <li><span className="check">?</span> Instant cash drawer reconciliation</li>
            </ul>
          </div></div>

          <div className="card"><div className="card-inner">
            <div className="muted">Security & compliance</div>
            <ul className="list">
              <li><span className="check">?</span> PCI DSS compliant terminals</li>
              <li><span className="check">?</span> End-to-end encryption</li>
              <li><span className="check">?</span> Role-based access control</li>
              <li><span className="check">?</span> Audit trails & exports</li>
            </ul>
          </div></div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          ? {new Date().getFullYear()} FlowPOS, Inc. All rights reserved.
        </div>
      </footer>
    </>
  );
}
