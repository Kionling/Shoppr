import React, {useRef} from 'react';
import API from '../../utils/API';

function Friends(){

    const friendsEmail = useRef();
    function handleFormSubmit(e) {
        e.preventDefault();

        let searchTerm = friendsEmail.current.value;

        API.searchForFriends(searchTerm).then( (results) => {
            // send the results to display the list of friends that match this
            // email.
        }).catch( err => console.log(err));

    }
    return (
        <div>
            <h1>I am in Connect with Friends Component</h1>

            <div>
                <form onSubmit={handleFormSubmit}>
                    <label>Enter your friend's email address:</label>
                    <input type="text" ref={friendsEmail}>

                    </input>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        
    );
}

export default Friends;