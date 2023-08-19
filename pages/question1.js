import React from "react"

const question1 = () => {
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
          <p>In my role as a production engineer, our team started off doing manual SSL certificate deployment. This method was clunky and prone to human errors and there have been challenges with wrong certs being deployed due to human error.  With my experience in Python, I started building a script  that will take an order number of a certificate from the certificate authority, pull that certificate locally, validates that it’s deploying to the right IP address and then deploy it with just one command from the terminal. This helped streamlining the SSL process and helped reduce the time it took for an engineer to deploy a certificate. As engineers started using the script more, the amount of processed certificate in a day increased which made it a successful solution.</p>
      </div>
    )
}

export default question1