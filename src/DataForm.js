import React, { useState } from 'react';
import './DataForm.css';

const DataForm = () => {
    const [formData, setFormData] = useState({
        SNo: "",
        SalesandPurchase: "",
        Date: "",
        PartyName: "",
        Details: "",
        Weight: "",
        Manpower: "",
        Material: "",
        Freight: "",
        Maintainance: "",
        Sales: "",
        PaymentReceived: "",
        AmountPaid: "",
        Balance: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);


    const validateWeight = (Weight) => {
        const re = /^\d+$/;
        return re.test(String(Weight));
    };

    const validateManpower = (Manpower) => {
        const re = /^\d+$/;
        return re.test(String(Manpower));
    };

    const validateMaterial = (Material) => {
        const re = /^\d+$/;
        return re.test(String(Material));
    };

    const validateFreight = (Freight) => {
        const re = /^\d+$/;
        return re.test(String(Freight));
    };

    const validateMaintainance = (Maintainance) => {
        const re = /^\d+$/;
        return re.test(String(Maintainance));
    };

    const validateSales = (Sales) => {
        const re = /^\d+$/;
        return re.test(String(Sales));
    };

    const validatePaymentReceived = (PaymentReceived) => {
        const re = /^\d+$/;
        return re.test(String(PaymentReceived));
    };

    const validateAmountPaid = (AmountPaid) => {
        const re = /^\d+$/;
        return re.test(String(AmountPaid));
    };

    const validateBalance = (Balance) => {
        const re = /^\d+$/;
        return re.test(String(Balance));
    };


    const validateForm = () => {
        const newErrors = {};
        if (!formData.SNo) newErrors.SNo = 'SNo';
        if (!formData.SalesandPurchase) newErrors.SalesandPurchase = 'Sales and Purchase is required';
        if (!formData.Date) newErrors.Date = 'Date is required';
        if (!formData.PartyName) newErrors.PartyName = 'Party Name is required';
        if (!formData.Details) newErrors.Details = 'Details is required';
        if (!formData.Weight || !validateWeight(formData.Weight)) newErrors.email = 'Valid Email is required';
        if (!formData.Manpower || !validateManpower(formData.Manpower)) newErrors.phone = 'Valid Phone is required';
        if (!formData.Material || !validateMaterial(formData.Material)) newErrors.Material = 'Material is required';
        if (!formData.Freight || !validateFreight(formData.Freight)) newErrors.Freight = 'Freight is required';
        if (!formData.Maintainance || !validateMaintainance(formData.Maintainance)) newErrors.Maintainance = 'Maintainance is required';
        if (!formData.Sales || !validateSales(formData.Sales)) newErrors.Sales = 'Sales is required';
        if (!formData.PaymentReceived || !validatePaymentReceived(formData.PaymentReceived)) newErrors.PaymentReceived = 'Payment Received is required';
        if (!formData.AmountPaid || !validateAmountPaid(formData.AmountPaid)) newErrors.AmountPaid = 'Amount Paid is required';
        if (!formData.Balance || !validateBalance(formData.Balance)) newErrors.Balance = 'Balance is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            localStorage.setItem('feedbackData', JSON.stringify([...JSON.parse(localStorage.getItem('feedbackData') || '[]'), formData]));
            setSubmitted(true);
            setFormData({
                SNo: "",
                SalesandPurchase: "",
                Date: "",
                PartyName: "",
                Details: "",
                Weight: "",
                Manpower: "",
                Material: "",
                Freight: "",
                Maintainance: "",
                Sales: "",
                PaymentReceived: "",
                AmountPaid: "",
                Balance: "",
            });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="Data-form-container">
            <h2>SGN TRACKER</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>SNo:</label>
                    <input type="number" name="SNo" value={formData.SNo} onChange={handleChange} />
                    {errors.SNo && <span>{errors.SNo}</span>}
                </div>
                <div>
                    <label>Sales and Purchase:</label>
                    <input type="text" name="SalesandPurchase" value={formData.SalesandPurchase} onChange={handleChange} />
                    {errors.SalesandPurchase && <span>{errors.SalesandPurchase}</span>}
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" name="Date" value={formData.Date} onChange={handleChange} />
                    {errors.Date && <span>{errors.Date}</span>}
                </div>
                <div>
                    <label>Party Name:</label>
                    <input type="text" name="PartyName" value={formData.PartyName} onChange={handleChange} />
                    {errors.PartyName && <span>{errors.PartyName}</span>}
                </div>
                <div>
                    <label>Details:</label>
                    <input type="text" name="Details" value={formData.Details} onChange={handleChange} />
                    {errors.Details && <span>{errors.Details}</span>}
                </div>
                {/* Numeric input fields */}
                <div>
                    <label>Weight:</label>
                    <input type="number" name="Weight" value={formData.Weight} onChange={handleChange} />
                    {errors.Weight && <span>{errors.Weight}</span>}
                </div>
                <div>
                    <label>Manpower:</label>
                    <input type="number" name="Manpower" value={formData.Manpower} onChange={handleChange} />
                    {errors.Manpower && <span>{errors.Manpower}</span>}
                </div>
                <div>
                    <label>Material:</label>
                    <input type="number" name="Material" value={formData.Material} onChange={handleChange} />
                    {errors.Material && <span>{errors.Material}</span>}
                </div>
                <div>
                    <label>Freight:</label>
                    <input type="number" name="Freight" value={formData.Freight} onChange={handleChange} />
                    {errors.Freight && <span>{errors.Freight}</span>}
                </div>
                <div>
                    <label>Maintainance:</label>
                    <input type="number" name="Maintainance" value={formData.Maintainance} onChange={handleChange} />
                    {errors.Maintainance && <span>{errors.Maintainance}</span>}
                </div>
                <div>
                    <label>Sales:</label>
                    <input type="number" name="Sales" value={formData.Sales} onChange={handleChange} />
                    {errors.Sales && <span>{errors.Sales}</span>}
                </div>
                <div>
                    <label>Payment Received:</label>
                    <input type="number" name="PaymentReceived" value={formData.PaymentReceived} onChange={handleChange} />
                    {errors.PaymentReceived && <span>{errors.PaymentReceived}</span>}
                </div>
                <div>
                    <label>Amount Paid:</label>
                    <input type="number" name="AmountPaid" value={formData.AmountPaid} onChange={handleChange} />
                    {errors.AmountPaid && <span>{errors.AmountPaid}</span>}
                </div>
                <div>
                    <label>Balance:</label>
                    <input type="number" name="Balance" value={formData.Balance} onChange={handleChange} />
                    {errors.Balance && <span>{errors.Balance}</span>}
                </div>
                <button type="submit">Submit</button>
                {submitted && <p>Thank you for completing the information</p>}
            </form>
        </div>
    );
};

export default DataForm;
