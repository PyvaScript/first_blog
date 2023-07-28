import "./search-field.styles.css";

const SearchField=({ className, placeholder, onChangeHandler })=>(
    <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
        autoFocus
    />
)

export default SearchField;




// import {Component} from 'react';
// import "./search-field.styles.css";

// class SearchField extends Component{
//     render(){
//         const {onChangeHandler, placeholder, className}=this.props;
//         return (
//             <input
//                 className={`search-box ${className}`}
//                 type="search"
//                 placeholder={placeholder}
//                 onChange={onChangeHandler}
//                 autoFocus
//             />
//         )
//     };
// };

// export default SearchField;
