import React from 'react'
import styles from '../css/components/QuizCard.module.css'

// props = {
//     question,
//     answers,
//     callback,
//     userAnswer,
//     qNum,
//     qTotal
// }
var props = {question:"If you lost all of your possessions but one, what would you want it to be?",answers:['Personal Computer','Fish','Car','Television'],qNum: 2,qTotal:20};


function QuizCard() {
  if (props.qNum < props.qTotal ){var button = <button className={styles.submit}>Next</button>}else{var button = <button className={styles.submit}>See results</button>}
  return (
    <div className={styles.card}>
        <h3 className={styles.question}>{props.question}</h3>
        
        <div className={styles.container}>
            {props.answers.map(answer => (
                <button className={styles.answer}>{answer}</button>

            ))}
        </div>

        <span className={styles.counter}>{props.qNum} / {props.qTotal}</span>
        {button}

    </div>
  )
}

export default QuizCard