import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {fetchUsers} from './userSlice'

const UserView = () => {
    const users = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return <div>
        <h2>List of users</h2>
        {users.loading && <h4>Loading...</h4>}
        {!users.loading && users.error ? <h4>{users.error}</h4>: null}
        {!users.loading && users.users.length ?  (
            <ul>
                {users.users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        ): 'No user data to dispplay'}

    </div>
}

export default UserView