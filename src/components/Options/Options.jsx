

export default function Options({ result, message, totalFeedback
}) {
    return (
        <>
            <button onClick={() => result("good")}>Good</button>
            <button onClick={() => result("neutral")}>Neutral:</button>
            <button onClick={() => result("bad")}>Bad: </button>
            {totalFeedback > 0 && (<button onClick={message}>reset: </button>)}

        </>
    )
}