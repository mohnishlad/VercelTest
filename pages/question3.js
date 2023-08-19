import React from 'react'

const question3 = () => {
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
          <p>I will be happy to help  in providing you with the difference between 
            our infrastructure specific features. Before going deep into the above features, 
            one important point to bring up here is Vercel acts both as a content delivery network
             and globally distributed compute platform. This means we can deploy any code to a 
             globally distributed servers so that when an end user tries to access it locally, 
             it will be served faster because of proximity to the actual edge server that processes 
             the request. Keeping this background in mind, let’s first look at Edge Functions. 
             Edge functions are small snippets of code that can run alongside on our global Edge Network. 
             Edge functions are generally used when you want to return responses or process requests as 
             fast as possible like interacting with an API that has a smaller timeout value. 
             Note that Edge functions gets executed after the network cache layer. 
             The next one that is closely related to Edge Functions would be Serverless functions. 
             The biggest difference between Edge and Serverless function is Serverless functions 
             can only run in either a single region or multiple regions as opposed to all global edge 
             network like Edge functions. This is why Serverless functions should be used for an always-on 
             compute with no downtime scenarios. This can generally used for handling user authentications,
              database queries etc. Lastly for Edge Middleware, these are specifically targeted for doing 
              request manipulations. For example, you want to redirect a request that contains the /abc 
              directory to /xyz directory, you would be using Edge middleware. The biggest difference 
              between Edge middleware and Edge/Server functions is it triggers before it reaches the edge 
              network. Please let me know if there are additional questions and I will more than happy to 
              answer them.</p>
      </div>
    )
}

export default question3