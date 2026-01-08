import React, { useState } from 'react'

export default function About(props) {
//  const [myStyle, setMyStyle]= useState({
//     color: 'black',
//     backgroundColor: 'white'
//   }) 
let myStyle ={
    color:props.mode ==='dark'?'Black':'#042743',
    backgroundcolor: props.mode ==='dark'?'#042743':'black',
    border: '2px solid',
    borderColor: props.mode ==='dark'?'#3a8493':'#042743',
}

//  const [btntext ,setBtntext] = useState("Enable Dark Mode")
//    const toggleStyle =()=>{
//     if(myStyle.color === 'black'){
//         setMyStyle({
//               color: 'white',
//              backgroundColor: 'black',
//              border:'1px solid white'
//         })
//         setBtntext("Enable Light Mode")
//     }
//      else{
//         setMyStyle({
//               color: 'black',
//              backgroundColor: 'white'
//         })

//        setBtntext("Enable Dark Mode") 
// }
// }
  return (
            <div className="container" style={{color:props.mode ==='dark'?'#3a8493':'#042743' /*myStyle*/} }>
                <h1 className="my-3" > About Us </h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  >
              <strong>TextUtiles History #1</strong>  
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>Early Text-Based Computing
                First Computers (1940s–1950s): </strong> Early computers primarily processed numbers and data, but text utilities started to emerge as programmers began to develop software that needed to handle textual data. Early systems were command-line-based and often lacked the graphical interfaces we see today, so text-based tools were essential for various tasks like compiling, editing, or formatting text.

Unix and the Development of Text Utilities (1970s–1980s):

The Unix operating system, developed by Ken Thompson and Dennis Ritchie at AT&T Bell Labs in the late 1960s and early 1970s, played a pivotal role in popularizing text utilities.
Unix provided a rich set of text-processing tools such as:
grep: A search utility to find specific patterns within text files.
sed: A stream editor for text manipulation (e.g., substitution, deletion, etc.).
awk: A programming language designed for text and data manipulation.
These tools formed the foundation of what we now consider basic text utilities, allowing users to manipulate and analyze text through commands.
Text Editors and Utilities
Text Editors: As personal computers became widespread, people needed better tools for editing text. In the 1980s, the rise of text editors like vi (on Unix) and Emacs (a highly extensible editor) provided users with utilities for efficient text editing and management.
Microsoft Word (released in 1983) and Notepad (in Windows) brought text utilities to a broader audience, making text editing more accessible to non-programmers.
Modern Text Utilities and Applications
Modern Tools: Today, text utilities are used in various contexts, from simple tools like Notepad++ and Sublime Text (which offer advanced features for text manipulation) to more complex systems for processing large datasets or handling natural language tasks (e.g., Python's re library for regular expressions or TextBlob for sentiment analysis).
Conclusion.
Text utilities evolved through the need for efficient management and manipulation of text in the context of computing. They started with the Unix command-line tools and advanced with the development of more complex text editors and software. The invention of these utilities is not attributed to a single person but rather to a series of contributions from the computer science and programming communities over time.
If you're referring to something specific by "textutiles" or have a particular software tool or function in mind, feel free to clarify!
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Home History #2</strong>  
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>1. Invention of the "Home" Button in Computing: </strong>
 The "Home" button is commonly found on keyboards and mobile devices. It serves as a key or button that quickly takes the user back to the beginning or main screen of an application or system.

History of the Home Button:
Early Keyboards: The "Home" key on physical keyboards (like those used with early personal computers in the 1980s) has been part of many standard keyboard layouts since the beginning of personal computing. It allowed users to quickly jump to the beginning of a document or text field without having to manually scroll.

Origins in Typewriters: The concept of a "home" key comes from typewriters. The "home position" referred to the default resting position for your fingers on the typewriter's keys (typically on the "home row"). With the advent of digital technology, the "Home" key on keyboards took on a similar purpose, allowing users to quickly navigate to a starting point.

Computing Evolution: As graphical user interfaces (GUIs) developed in the 1980s and 1990s, the "Home" button or function also became a part of early desktop environments (like Windows, Macintosh, etc.) for navigating back to the home screen or the root directory.

2. Invention of the "Home" Page on the Web:
The concept of a "Home" page refers to the starting page or landing page of a website. It’s the default page you see when you visit a website’s domain (e.g., www.example.com).

History of the Home Page:
Early Internet (1990s): The idea of a "home page" became popular with the rise of the World Wide Web. The first web page ever created was by Tim Berners-Lee, the inventor of the World Wide Web, in 1991. This page served as an informational introduction to the web and the World Wide Web project itself.

Tim Berners-Lee's first web page was essentially a home page for the early internet, serving as a central hub to navigate other resources.
Evolution of Websites: In the early days of the web, many websites simply had one home page that included links to other pages. Over time, web design evolved, and the "Home" page became a designated starting point for users visiting a website.

Web Navigation: As the web grew in complexity and websites became more sophisticated in the late 1990s and early 2000s, the "Home" button (often represented by a logo or a link at the top of the page) became a staple of modern website design. Users could always click the "Home" link to return to the main page, regardless of where they were on the site.

In Summary:
Home Key (Physical Keyboards): The "Home" button originated with typewriters, where it referred to the default position of the hands. In computing, it became a standard key on keyboards used to quickly navigate to the start of a document or screen.
Home Page (Websites): The "Home" page concept emerged with the development of the World Wide Web, where it served as the default starting page for a website.
These innovations were not invented by a single person but rather evolved over time with contributions from multiple individuals in the fields of computing and web design.
        </div>
        </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             <strong>About History #3</strong>   
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>Invention of the "About" Page: Early Websites (1990s):  </strong>


When the World Wide Web became publicly accessible in the early 1990s, websites were often very simple and rudimentary, typically consisting of basic information or links to other pages.
The "About" page became a standard part of web design as websites grew more complex. The idea was to give users a place where they could find out more about the person or organization responsible for the website, their goals, values, history, or purpose.
Purpose of the "About" Page:

Clarify Intentions: The "About" page helped clarify the website's purpose and its creators' intentions, whether it was for a business, personal project, or informational resource.
Credibility and Trust: It provided visitors with information about the legitimacy and background of the entity behind the website, helping build trust with the audience.
Personal Touch: For individuals or small projects, the "About" page often allowed the creator to share their personal story, mission, and motivation.
Standardization (1990s - 2000s):

As the web matured and websites became more sophisticated, the "About" page became a standardized feature across most websites. It typically includes elements like:
The name and description of the business or website.
The mission statement or purpose.
Contact information.
Sometimes a brief history of the organization or project.
Evolution of the "About" Section:

In addition to full "About" pages, modern websites also have condensed versions of this section, sometimes featured in the website's sidebar, footer, or as part of the homepage. It often includes a brief introduction, the purpose of the website, or highlights of key information.
Conclusion:
The "About" page likely emerged alongside the development of the web, starting in the early 1990s, as a way to provide visitors with more context about the website or organization. It evolved as web design became more standardized, offering a key way for website creators to establish credibility, trust, and a deeper connection with visitors.

If you meant something different by asking about "invention of about," please feel free to clarify!





            </div>
            </div>
        </div>
        </div>
        <div className="container my-3">

             {/* <button onClick={toggleStyle} type="button" className="btn btn-info">{btntext}</button> */}
        </div>
    </div>
  )
}
