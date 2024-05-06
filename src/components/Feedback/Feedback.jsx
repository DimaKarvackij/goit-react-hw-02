export default function Feedback({ result, positiveFeedback, totalFeedback }) {
    return (
        <>
            <p>Good: {result.good}</p>
            <p>Neutral: {result.neutral}</p>
            <p>Bad: {result.bad}</p>
            <p>total: {totalFeedback}</p>
            <p>Positive {positiveFeedback}%</p>


        </>
    )

}