import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import './SubmissionsTable.css';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const SubmissionsTable = () => {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const savedSubmissions = JSON.parse(localStorage.getItem('feedbackData') || '[]');
        setSubmissions(savedSubmissions);
    }, []);

    const componentRef = React.useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const handleDownloadPDF = () => {
        const input = document.getElementById('table-container');

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgHeight = (canvas.height * 208) / canvas.width;
            pdf.addImage(imgData, 0, 0, 208, imgHeight);
            pdf.save('table.pdf');
        });
    };

    const handleDelete = (index) => {
        const updatedSubmissions = [...submissions];
        updatedSubmissions.splice(index, 1);
        setSubmissions(updatedSubmissions);
        localStorage.setItem('feedbackData', JSON.stringify(updatedSubmissions));
    };

    return (
        <div>
            <h2>SGN TRACKER</h2>
            <div id="table-container" ref={componentRef}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Sales and Purchase</th>
                            <th>Date</th>
                            <th>Party Name</th>
                            <th>Details</th>
                            <th>Weight</th>
                            <th>Manpower</th>
                            <th>Material</th>
                            <th>Freight</th>
                            <th>Maintenance</th>
                            <th>Sales</th>
                            <th>Payment Received</th>
                            <th>Amount Paid</th>
                            <th>Balance</th>
                            <th>Delete</th> {/* New delete column */}
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.map((submission, index) => (
                            <tr key={index}>
                                <td>{submission.SNo}</td>
                                <td>{submission.SalesandPurchase}</td>
                                <td>{submission.Date}</td>
                                <td>{submission.PartyName}</td>
                                <td>{submission.Details}</td>
                                <td>{submission.Weight}</td>
                                <td>{submission.Manpower}</td>
                                <td>{submission.Material}</td>
                                <td>{submission.Freight}</td>
                                <td>{submission.Maintainance}</td>
                                <td>{submission.Sales}</td>
                                <td>{submission.PaymentReceived}</td>
                                <td>{submission.AmountPaid}</td>
                                <td>{submission.Balance}</td>
                                <td>
                                    <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className="buttons-container">
                <Button variant="primary" onClick={handlePrint}>Print</Button>
                <Button variant="success" onClick={handleDownloadPDF}>Download PDF</Button>
            </div>
        </div>
    );
};

export default SubmissionsTable;
