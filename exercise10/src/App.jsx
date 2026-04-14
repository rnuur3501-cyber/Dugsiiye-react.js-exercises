import UserList from './UserList';

const App = () => {
  const users = [
     {
      id:1 , name:"Rahma", email:"rnuur3591@gmail.com"
    },
    {
      id:2 , name:"Rimaa" , email:"rimaanuur@gmail.com"
    }
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;