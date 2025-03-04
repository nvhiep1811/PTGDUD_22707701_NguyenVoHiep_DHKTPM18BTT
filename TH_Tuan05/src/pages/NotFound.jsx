import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404 - Trang không tồn tại!</h1>
      <button style={{marginTop: 10, width: 100, height: 50, borderRadius: 5, background: 'tomato'}}>
        <Link style={{textDecoration: 0, fontWeight: 'bold', fontSize: 'large'}} to="/">Back</Link>
      </button>
    </div>
  )
}

export default NotFound