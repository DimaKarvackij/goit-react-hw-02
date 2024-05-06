
import Feedback from "./components/Feedback/Feedback"
import Options from "./components/Options/Options"
import { useState } from "react"
import Notification from './components/Notification/Notification'
import Description from "./components/Description/Description"




function App() {
    const [feedback, setFedback] = useState(() => {
        const savedFeedback = localStorage.getItem("feedback");
        return savedFeedback
            ? JSON.parse(savedFeedback)
            : { good: 0, neutral: 0, bad: 0 };
    })

    const updateFeedback = feedbackType => {
        setFedback({
            ...feedback,
            [feedbackType]: feedback[feedbackType] + 1
        })
    }
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
    const handleReset = () => {
        setFedback({ good: 0, neutral: 0, bad: 0 });
    };


    return (
        <>
            <Description />
            <Options result={updateFeedback} message={handleReset} totalFeedback={totalFeedback} />
            {totalFeedback > 0 ?
                (<Feedback result={feedback} positiveFeedback={positiveFeedback} totalFeedback={totalFeedback} />) :
                (<Notification message="Nofe feedback yet" />)}
        </>
    )

}

export default App
