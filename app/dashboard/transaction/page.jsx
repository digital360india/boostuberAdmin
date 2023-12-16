import Table1 from "@/components/Tables/Table1";
const columns = ['TRANS ID', 'USER NAME', 'COIN', 'TASK', 'TYPE', 'ALIAS', 'REMAINED COIN', 'OFFERWALL', 'CAMPAIGN ID', 'IP', 'DATE', 'TRACK'];
const otherData = [
    {
      transId: 1,
      userName: 'John Doe',
      coin: 100,
      task: 'Complete Survey',
      type: 'Task Type A',
      alias: 'JD',
      remainedCoin: 50,
      offerwall: 'Offerwall A',
      campaignId: 'C001',
      ip: '192.168.1.1',
      date: '2023-01-15',
      track: 'ABC123',
    },
    {
      transId: 2,
      userName: 'Alice Smith',
      coin: 50,
      task: 'Watch Video',
      type: 'Task Type B',
      alias: 'AS',
      remainedCoin: 25,
      offerwall: 'Offerwall B',
      campaignId: 'C002',
      ip: '192.168.1.2',
      date: '2023-01-16',
      track: 'DEF456',
    },
    // ... add more data as needed
  ];

const Transaction = () => {
  return (
    <div className="p-0 ">
      <div className="text-xl">All Transcation</div>
      <Table1 columns={columns} data={otherData}/>
    </div>
  );
};

export default Transaction;
