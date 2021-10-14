import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
           <h3>This is home page </h3> 
           <p>{ user.displayName } </p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ex repudiandae amet accusantium nobis, maxime quis ipsam officiis expedita consequuntur excepturi aperiam, dolor consequatur quaerat ducimus, sunt pariatur. Nostrum, facilis!</p>
        </div>
    );
};

export default Home;