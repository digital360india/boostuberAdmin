import Table1 from '@/components/Tables/Table1'
import React from 'react'

const bogousValues=[
    {
      "SELECT": false,
      "PHOTO": "icon1.png",
      "TITLE": "Product A",
      "PRODUCT ID": "PD001",
      "DESCRIPTION": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "PRICE": 29.99,
      "VALID FOR": "30 days",
      "TASK DETAIL": "Details for Product A task",
      "STATUS": "Active",
      "CREATED AT": "2023-01-01T12:00:00Z",
      "ACTION": "Edit"
    },
    {
      "SELECT": false,
      "PHOTO": "icon2.png",
      "TITLE": "Product B",
      "PRODUCT ID": "PD002",
      "DESCRIPTION": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "PRICE": 19.99,
      "VALID FOR": "15 days",
      "TASK DETAIL": "Details for Product B task",
      "STATUS": "Pending",
      "CREATED AT": "2023-02-05T14:30:00Z",
      "ACTION": "Delete"
    },
    {
      "SELECT": false,
      "PHOTO": "icon3.png",
      "TITLE": "Product C",
      "PRODUCT ID": "PD003",
      "DESCRIPTION": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "PRICE": 39.99,
      "VALID FOR": "45 days",
      "TASK DETAIL": "Details for Product C task",
      "STATUS": "Completed",
      "CREATED AT": "2023-03-10T09:45:00Z",
      "ACTION": "View"
    },
    {
      "SELECT": false,
      "PHOTO": "icon4.png",
      "TITLE": "Product D",
      "PRODUCT ID": "PD004",
      "DESCRIPTION": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "PRICE": 49.99,
      "VALID FOR": "60 days",
      "TASK DETAIL": "Details for Product D task",
      "STATUS": "Inactive",
      "CREATED AT": "2023-04-20T18:20:00Z",
      "ACTION": "Activate"
    },
    {
      "SELECT": false,
      "PHOTO": "icon5.png",
      "TITLE": "Product E",
      "PRODUCT ID": "PD005",
      "DESCRIPTION": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "PRICE": 24.99,
      "VALID FOR": "20 days",
      "TASK DETAIL": "Details for Product E task",
      "STATUS": "Pending Approval",
      "CREATED AT": "2023-05-15T11:10:00Z",
      "ACTION": "Approve"
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