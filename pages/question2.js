import React from 'react'

const question2 = () => {
    const styles = {
        answer: {
            padding: "20px",
            margin: "50px",
            fontSize: "20px",
            border: "5px solid green" 
        }
    };
    return (
      <div className = "answer" style={styles.answer}>
        Comparing next.js with angular: 
            <li>High Speed Performance: Next.js does all the heavy lifting at compile-time so pages load faster as opposed to Angular where developers have to wait until runtime for the tasks to complete before they see any errors.</li>
            <li>Importing meta tags: Can be just provided in one file next.json while angular expects tags to be added to different files for different types of meta tags.</li>
            <li>Quick render: Next.js optimizes reloading time by sending enough data to the browser so that it can continue rendering the current page. Angular sends the full HTML page each time and thus takes longer time.</li>
            <li>SEO applications: Next.js is ideal for SEO applications. Angular lack SEO capabilities.</li>
      </div>
    )
}

export default question2