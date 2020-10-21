import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// class Booklist extends Component {
//   //syntax to use context. only works in class components and only one context can be used.
//   static contextType = ThemeContext;

//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         className="book-list"
//         style={{ background: theme.bg, color: theme.syntax }}
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>5 am club</li>
//           <li style={{ background: theme.ui }}>alchemist</li>
//           <li style={{ background: theme.ui }}>art of war</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default Booklist;

const Booklist = () => {
    
const {isLightTheme, light, dark} = useContext(ThemeContext)
const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui }}>5 am club</li>
        <li style={{ background: theme.ui }}>alchemist</li>
        <li style={{ background: theme.ui }}>art of war</li>
      </ul>
    </div>
  );
};

export default Booklist;
