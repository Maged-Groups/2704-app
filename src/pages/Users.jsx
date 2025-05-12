console.log('Users.jsx file');

const res = await fetch('https://dummyjson.com/users');
console.log('res', res);

const data = await res.json();
console.log('data', data);

const { users } = data;


export default function Users() {


  console.log('Users Component rendered');


  return (
    <div>
      <h2 className="text-3xl">Users</h2>
      {
        users.map(user => <div key={user.id}>{user.firstName}</div>)
      }
    </div>
  )
}
