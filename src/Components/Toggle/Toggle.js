import React, {useState} from 'react';
import "./toggle.min.css";

export default function Toggle({isDarkMode = false, onChange}) {
    const [isDark, setisDark] = useState(isDarkMode)
    const switchMode = () => {
        setisDark(!isDark) 
        onChange && onChange(!isDark)
    }
    return <div onClick={switchMode} className={`toggle-container ${isDark?"dark":""}`}>
    <span className={`toggle-btn ${isDark?"active":""}`}></span>
</div>
};
