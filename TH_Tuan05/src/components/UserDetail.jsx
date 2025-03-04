import {Link,  useParams} from 'react-router-dom'

import avt1 from '../images/user1.jpg'
import avt2 from '../images/user2.jpg'
import avt3 from '../images/user3.jpg'

const users = [
    { id: 1, name: "Nguyễn Văn A", age: 25, email: "a@example.com", image: avt1 },
    { id: 2, name: "Trần Thị B", age: 30, email: "b@example.com", image: avt2 },
    { id: 3, name: "Lê Văn C", age: 28, email: "c@example.com", image: avt3 }
];    

const UserDetail = () => {
    const {id} = useParams()
    const user = users.find(u => u.id === parseInt(id));

    if (!user) {
        return <div>
          <h2>Người dùng không tồn tại!!!</h2>
          <button style={{marginTop: 10, width: 100, height: 50, borderRadius: 5, background: 'tomato'}}>
          <Link style={{textDecoration: 0, fontWeight: 'bold', fontSize: 'large'}} to="/">Back</Link>
        </button>
        </div>
    }
  return (
    <div>
        <h1>THÔNG TIN CÁ NHÂN</h1>
        <div className='user-info'>
          <img src={user.image} width={250} height={250} alt={"user" + user.id} />
          <h2>{user.name}</h2>
          <span>Tuổi: {user.age}</span>
          <p>Email: {user.email}</p>
        </div>
        <button style={{marginTop: 10, width: 100, height: 50, borderRadius: 5, background: 'tomato'}}>
          <Link style={{textDecoration: 0, fontWeight: 'bold', fontSize: 'large'}} to="/">Back</Link>
        </button>
    </div>
  )
}

export default UserDetail