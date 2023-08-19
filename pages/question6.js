import React from 'react'

const question6 = () => {
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
          <p>You can use the x-robots-tag: noindex to prevent the site to be indexed. Vercel already adds this header automatically for Preview deployments to prevent negative SEO impact from duplicate content. More details of testing this injection of this header can be found here: https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines</p>
      </div>
    )
}

export default question6