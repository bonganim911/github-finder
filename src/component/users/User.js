import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/spinner/Spinner';
import propTypes from 'prop-types';

const User = ({users, loading}) => {

    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                        <UserItem key={user.id} user={user}/>
                    )
                )}
            </div>
        );
    }

};

User.propTypes = {
    users: propTypes.array.isRequired,
    loading: propTypes.bool.isRequired
};

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"
};
export default User;