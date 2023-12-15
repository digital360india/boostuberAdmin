import Table1 from '@/components/Tables/Table1'
import React from 'react'

const bogousValues=[
    {
      "SELECT": false,
      "TICKET ID": "TCKT001",
      "USER": "John Doe",
      "EMAIL": "john.doe@example.com",
      "SUBJECT": "Login Issue",
      "MESSAGE": "I'm having trouble logging into my account.",
      "STATUS": "Open",
      "CREATED DATE": "2023-01-05T08:30:00Z",
      "UPDATE STATUS TO": "In Progress"
    },
    {
      "SELECT": false,
      "TICKET ID": "TCKT002",
      "USER": "Alice Smith",
      "EMAIL": "alice.smith@example.com",
      "SUBJECT": "Payment Inquiry",
      "MESSAGE": "I would like to inquire about a recent payment.",
      "STATUS": "Pending",
      "CREATED DATE": "2023-02-12T14:45:00Z",
      "UPDATE STATUS TO": "Resolved"
    },
    {
      "SELECT": false,
      "TICKET ID": "TCKT003",
      "USER": "Bob Johnson",
      "EMAIL": "bob.johnson@example.com",
      "SUBJECT": "Technical Support",
      "MESSAGE": "Experiencing technical issues with the app.",
      "STATUS": "Open",
      "CREATED DATE": "2023-03-20T10:15:00Z",
      "UPDATE STATUS TO": "Closed"
    },
    {
      "SELECT": false,
      "TICKET ID": "TCKT004",
      "USER": "Eva Davis",
      "EMAIL": "eva.davis@example.com",
      "SUBJECT": "Account Deactivation",
      "MESSAGE": "I want to deactivate my account.",
      "STATUS": "Open",
      "CREATED DATE": "2023-04-18T18:00:00Z",
      "UPDATE STATUS TO": "In Progress"
    },
    {
      "SELECT": false,
      "TICKET ID": "TCKT005",
      "USER": "Michael Brown",
      "EMAIL": "michael.brown@example.com",
      "SUBJECT": "Feature Request",
      "MESSAGE": "Suggesting a new feature for the platform.",
      "STATUS": "Pending",
      "CREATED DATE": "2023-05-22T11:30:00Z",
      "UPDATE STATUS TO": "Open"
    }
  ]
  
  

const page = () => {
  return (
    <div className="p-0 ">
    <div className="text-xl">Plans</div>
    <Table1 columns={Object.keys(bogousValues[0])} data={bogousValues} />
  </div>
  )
}

export default page