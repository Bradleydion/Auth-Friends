import React from "react"

const AddFriend = () => {

    return(
        <div className="AddFriendCard">
            <input
            type="text"
            name="fullname"
            placeholder="Full Name"/>
            <input
            type="text"
            name="age"
            placeholder="Age"/>
            <input
            type="text"
            name="email"
            placeholder="Email"/>
            <button name="addFriend">Add Friend</button>
        </div>
    )
}
export default AddFriend