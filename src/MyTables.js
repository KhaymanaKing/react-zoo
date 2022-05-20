import React from 'react';
import MaterialTable from 'material-table';
import { customers } from './data.js';

export default function MyTables() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable 
        columns={
          [
            { title: 'ID', field: 'id' },
            { title: 'First Name', field: 'first_name' },
            { title: 'Last Name', field: 'last_name' },
            { title: 'Email', field: 'email' },
            { title: 'Gender', field: 'gender' },
            { title: 'Description', field: 'description' },
          ]
        }
        data={customers}
        title='List of Suspects'
        localization={{
          pagination : {
            nextAriaLabel: 'next',
            previousAriaLabel: 'previous'
          }
        }}/>
    </div>
  );
}
