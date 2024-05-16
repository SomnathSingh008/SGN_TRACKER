import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import DataForm from './DataForm';
import SubmissionsTable from './SubmissionsTable';
import './App.css';

const App = () => {
  return (
    <div>
      <Tabs defaultActiveKey="Data" id="uncontrolled-tab-example">
        <Tab eventKey="Data" title="Data Form">
          <DataForm />
        </Tab>
        <Tab eventKey="submissions" title="Submissions">
          <SubmissionsTable />
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
