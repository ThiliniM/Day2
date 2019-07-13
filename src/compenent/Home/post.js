import React from 'react';


class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };
    }


    render() {
        const { onDelete, post } = this.props;
        const { text } = this.state;
        console.log("render : ", this.props);
        
        return (
            (<div classname="post">
                <p>{post.text}</p>
                <button>Edit</button>
                <button onClick={() => onDelete(post._id)}>Delete</button>
                <p classname="timestamp">{post.timestamp}</p>
            </div>)
        );
    }

}
export default Post;

