import Head from 'next/head'
import Image from 'next/image'
import { Cute_Font, Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


export default function Home() {
  const styles = {
    container: {
      margin: "50px"
    },
    subHeading:{
      paddingTop:"15px"
    },
    unorderedList:{
      margin:"15px",
      fontSize:"20px"
    },
    listElement:{
      padding:"5px"
    }
}; 
  return (
    <div classname="container" style={styles.container}>
      <h1>Vercel Interview</h1>
      <h3 classname="subHeading" style={styles.subHeading}>Please click on each question below to go to its answer</h3>
      <ul class="list-group" className="unorderedList" style={styles.unorderedList}>
        <li class="list-group-item" className="listElement" style={styles.listElement}>
          <a href= "/question1">
            Describe how you solved a challenge that one of your previous teams faced? 
            How did you determine your solution was successful?
          </a>
        </li>
        <li class="list-group-item" className="listElement" style={styles.listElement}>
          <a href= "/question2">How would you compare Next.js with another framework? Feel free to compare with a framework of your choice.</a>
        </li>
        <li class="list-group-item" className="listElement" style={styles.listElement}>
          <a href= "/question3">A customer has reached out asking,“When should I choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?” Write a reply to the customer.</a>
        </li>
        <li class="list-group-item" className="listElement" style={styles.listElement}>
          <a href= "/question4">A customer has a project on Vercel and they want to redirect the /blog path to another website. Write a reply to the customer.</a>
        </li>
        <li class="list-group-item" className="listElement" style={styles.listElement}>
          <a href= "/question5"> Imagine that the customer from Question 4 responds with the following email.
“I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so why don't you just fix it for me instead of asking me questions.” Write a reply to the customer addressing the concerns raised.
</a>
        </li>
        <li class="list-group-item" className="listElement" style={styles.listElement}>
          <a href= "/question6">A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer.</a>
        </li>
        <li class="list-group-item" className="listElement" style={styles.listElement}>
          <a href= "/question7">How could we improve or alter this familiarization exercise?</a>
        </li>
      </ul>
    </div>
  )
}

