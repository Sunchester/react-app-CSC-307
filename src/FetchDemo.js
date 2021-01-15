import React from 'react';
//yarn add axios
import axios from 'axios'
class FetchDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {posts: []}
    }
    fetchData(){
        const url = '/${this.props.subreddit}.json';
        axios.get(url)
            .then(res=>{const posts = res.data.data.children.map(obj=>obj.data);
            this.setState({posts});
        });
    }
    componentDidMount(){
        this.fetchData();
    }
    render(){
        return (
            <div>
                
            <h1>r/{this.props.subreddit}</h1>
            <ul>
                {
                    this.state.posts.map(post=>
                        <li key={post.id}>
                            <a href={post.url}>
                                </a>
                        </li>
                        
                    )
                    }
            </ul>
            </div>
        
    
}
}
export default FetchDemo;