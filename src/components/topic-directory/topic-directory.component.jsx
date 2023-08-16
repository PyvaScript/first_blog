import { useEffect } from "react";

import TopicDirectoryTopic from "../topic-directory-topic/topic-directory-topic.component.jsx";

import { TopicDirectoryContainer } from "./topic-directory.styles.jsx";

const articleTopics=[
    {
      key:1,
      title:'Deepfake Technology',
      imageSRC:'https://ih1.redbubble.net/image.1019607332.7947/mp,840x830,matte,f8f8f8,t-pad,1000x1000,f8f8f8.jpg',
      alt:"Deepfake",
      location:'/deepfake/technology'
    },
    {
      key:2,
      title:"Ransomeware",
      imageSRC:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OFtE3tvCEsI4UTjTzDBXcZ-VSiu3194Zpg&usqp=CAU',
      alt:"Ransomware",
      location:'/ransomware'
    },
    {
      key:3,
      title:"Social Engineering",
      imageSRC:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStOKmkFHDKHEvTXk7NEQtbnUUSN-jbt73Qf3hlyh4&s",
      alt:"Social Engineering",
      location:'/engineering/social'
    },
    {
      key:4,
      title:"Zero-Trust Security",
      imageSRC:"https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781394203147&w=&h=570",
      alt:"Zero-Trust",
      location:'/security/zero-trust'
    },
    {
      key:5,
      title:"Quantum Computing",
      imageSRC:"https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781785787072&w=&h=570",
      alt:"Quantum Computing",
      location:'/quantum-computing'
    },
    {
      key:6,
      title:"Hacking The Human Mind",
      imageSRC:"https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781119895947&w=&h=570",
      alt:"Hacking the human mind",
      location:'/hacking/human/mind'
    },
  ];

const TopicDirectory=()=>(

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
