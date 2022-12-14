import React from 'react'

export default function About(props) {
    return (
        <>
            <div className="container mt-3" style={{backgroundColor:props.mode==="light"?"white":props.mode==="green"?"#0a3b0a":"rgb(20 33 60)" , color:props.mode==="light"?"black":props.mode==="green"?"white":"white" }}>
                <h2 className="my-3 text-center">About App</h2>
                <p>
                    This is a simple <strong>Text Utility</strong> web application made using Reactjs <br />
                    You can use this text utility to count the words and characters in your text or to enhance your text by converting it to uppercase from lowercase,from lowercase to uppercase,replicate the text and invert text.
                    <br /><br />
                    This application has four modes <br /><br />
                    - Light Mode <br />
                    - Blue Dark Mode <br />
                    - Green Dark Mode <br />
                </p>
            </div>
        </>
    )
}
