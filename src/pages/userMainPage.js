import React from "react";
import {useParams} from "react-router-dom"

function UserMainPage(){

    var {username} = useParams();
    return(
        <div>{username}'s PAGE</div>
    );
}

export default UserMainPage;