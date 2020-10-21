import React, { useState,useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// class ThemeToggle extends Component {
//   state = {
//     mode: "dark",
//   };
//   static contextType = ThemeContext;
//   render() {
//     const { toggleTheme } = this.context;

//     const changeMode = () => {
//       if (this.state.mode === "dark") {
//         this.setState({ mode: "light" });
//       } else {
//         this.setState({ mode: "dark" });
//       }
//     };
//     return (
//       <div>
//         <h5>switch to {this.state.mode} mode</h5>
//         <label className="switch">
//           <input
//             type="checkbox"
//             onChange={() => {
//               toggleTheme();
//               changeMode();
//             }}
//           />
//           <span className="slider"></span>
//         </label>
//       </div>
//     );
//   }
// }

const ThemeToggle = () => {
 
  const [mode, setMode] = useState({theme: 'dark'})
  const { toggleTheme } = useContext(ThemeContext)

  const changeMode = () => {
    if (mode.theme === "dark") {
      setMode({ theme: "light" });
    } else {
      setMode({ theme: "dark" });
    }
  }

  return (
    <div>
      <h5>switch to {mode.theme} mode</h5>
      <label className="switch">
        <input
          type="checkbox"
          onChange={() => {
            toggleTheme();
            changeMode();
          }}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;