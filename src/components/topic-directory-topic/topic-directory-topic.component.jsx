import "./topic-directory-topic.styles.scss";
import { Link } from 'react-router-dom';

const TopicDirectoryTopic=({title,imageAlt,imageSRC,location})=>(
    <div className="topic-directory-topic">
        <Link style={{ textDecoration:"none", color:"orange"}} to={location}>
            <h2>{ title }</h2>
        </Link>
        <Link to={location}>
            <img
            src={ imageSRC }
            alt={ imageAlt }
            />
        </Link>
    </div>
);

export default TopicDirectoryTopic;



// import {Component} from 'react';

// class ArticleListArticle extends Component {
//     render(){
//         const {title, imageAlt, imageSRC}=this.props;
//         return (
//             <div className="article-list-article">
//                 <h2>{ title }</h2>
//                 <img
//                     alt={ imageAlt }
//                     src={ imageSRC }
//                 />
//             </div>
//         )
//     };
// };

// export default ArticleListArticle;
