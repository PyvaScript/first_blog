import TopicDirectoryTopic from "../topic-directory-topic/topic-directory-topic.component.jsx";

import { TopicDirectoryContainer } from "./topic-directory.styles.jsx";

const TopicDirectory=({ articleTopics })=>(
    <TopicDirectoryContainer>
        {
            articleTopics.map((topic)=>{
                return (
                    <TopicDirectoryTopic
                        key={ topic.key }
                        title={ topic.title }
                        imageSRC={ topic.imageSRC }
                        imageALT={ topic.alt }
                        location={ topic.location }
                    />
                )
            })
        }
    </TopicDirectoryContainer>
);

export default TopicDirectory;




/*
import "./topic-directory.styles.scss";
import TopicDirectoryTopic from '../topic-directory-topic/topic-directory-topic.component.jsx';

const TopicDirectory = ({articleTopics})=>(
    <div className="topic-directory-container">
        {
            articleTopics.map((topic)=>{
                return <TopicDirectoryTopic key={topic.key} title={topic.title} imageSRC={topic.imageSRC} imageAlt={topic.alt} location={topic.location}/>
            })
        }
    </div>
);

export default TopicDirectory;
*/




// import { Component } from 'react';
// import ArticleListArticle from "./../article-list-article/article-list-article.component.jsx";

// class ArticleList extends Component {
//     render(){
//         const {filteredArticles}=this.props;
//         return(
//             <div>
//                 {
//                     filteredArticles.map((article)=>{
//                         return <ArticleListArticle key={article.key} title={article.title} imageSRC={article.imageSRC} imageAlt={article.alt}/>
//                     })
//                 }
//             </div>
//         )
//     };
// };

// export default ArticleList;
