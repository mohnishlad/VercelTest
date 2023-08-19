import React from 'react'

const question4 = () => {
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
          <p>From your initial description of the requirement, it looks like you are doing a static redirect. This can be achieved using configuration-based redirects. Configuration-based redirects can be defined in framework-specific config file or in the vercel.json file. If you are using next.js, you should  use the framework-native next.config.js to define configuration-based redirects. For more details, please review this document: https://vercel.com/docs/edge-network/redirects#configuration-redirects. 
            
          If this is critical, dynamic redirect that needs to run on every request, please consider using edge middleware : https://vercel.com/docs/functions/edge-middleware
             </p>
      </div>
    )
}

export default question4