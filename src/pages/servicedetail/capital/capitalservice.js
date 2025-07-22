import React from "react";
import "./capitalservice.css";
import { FaFileInvoiceDollar, FaUsersCog, FaBalanceScale, FaLaptop, FaChartLine } from "react-icons/fa";

const CapitalService = () => {
  return (
    <div className="capital-wrapper">
      <header className="hero-section">
        <div className="hero-text">
          <h1>Experience Remote Bookkeeping Anytime, Anywhere</h1>
          <p>Empowering your business with accurate, affordable, and expert financial solutions.</p>
        </div>
      </header>

      <section className="highlights">
        <div className="highlight">
          <FaUsersCog className="highlight-icon" />
          <h3>Expert Insights</h3>
          <p>We offer professional insights to help manage your business finances efficiently.</p>
        </div>
        <div className="highlight">
          <FaBalanceScale className="highlight-icon" />
          <h3>Affordable Prices</h3>
          <p>Services accessible to businesses and individuals of all sizes.</p>
        </div>
        <div className="highlight">
          <FaFileInvoiceDollar className="highlight-icon" />
          <h3>Accurate Reports</h3>
          <p>We deliver timely and precise financial reporting for decision-making.</p>
        </div>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Bookkeepingservices.in provides outsourced accounting solutions tailored to small and mid-sized businesses. With a decade of experience in India and the US, we enable business owners to make informed financial decisions while we handle the numbers.
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-box"><FaLaptop /><h4>Transaction Recording</h4></div>
          <div className="service-box"><FaLaptop /><h4>Bank Reconciliation</h4></div>
          <div className="service-box"><FaLaptop /><h4>Credit Card Allocation</h4></div>
          <div className="service-box"><FaLaptop /><h4>Payroll Processing</h4></div>
          <div className="service-box"><FaLaptop /><h4>Accounts Receivable</h4></div>
          <div className="service-box"><FaLaptop /><h4>Accounts Payable</h4></div>
          <div className="service-box"><FaLaptop /><h4>Inventory Management</h4></div>
          <div className="service-box"><FaLaptop /><h4>Financial Reporting</h4></div>
          <div className="service-box"><FaLaptop /><h4>Tax Return Preparation</h4></div>
          <div className="service-box"><FaLaptop /><h4>Budgeting & Forecasting</h4></div>
          <div className="service-box"><FaLaptop /><h4>Financial Analysis</h4></div>
          <div className="service-box"><FaLaptop /><h4>General Financial Support</h4></div>
        </div>
      </section>

      <section className="why-us">
        <h2>Why Choose Us</h2>
        <ul>
          <li><strong>Client-Centric Approach:</strong> Tailored services to meet your financial goals.</li>
          <li><strong>Diverse Experience:</strong> 12+ years across industries.</li>
          <li><strong>Advanced Technology:</strong> Leveraging modern accounting tools.</li>
          <li><strong>Comprehensive Services:</strong> From bookkeeping to strategy.</li>
          <li><strong>Transparent Communication:</strong> Stay informed and confident.</li>
        </ul>
      </section>

      <footer className="capital-footer">
        <p>&copy; 2025 Bookkeeping Services | Indore, MP | Roslyn Heights, NY</p>
      </footer>
    </div>
  );
};

export default CapitalService;
