import React, {useState, useEffect} from 'react';
import './Toggle.scss';
import nightIcon from 'assets/night-icon.svg';
import sunnyIcon from 'assets/sunny-icon.svg';

const DarkModeToggle = () => {
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);
  useEffect(() => {
    document
    .getElementsByTagName("HTML")[0]
    .setAttribute("data-theme", localStorage.getItem("theme"));
  },[]);

  const toggleThemeChange = () => {;
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(false);
    }
  }

  return(
    <label className="switch">
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={() => toggleThemeChange()}
      />
      <span className="slider round toggle">
        <img src={nightIcon} alt="night-icon" />
        <img src={sunnyIcon} alt="sunny-icon" />
      </span>
    </label>
  )
}

export default DarkModeToggle;