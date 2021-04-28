import { Button } from "@material-ui/core";
import { useState } from "react";


const Suggestions = () => {
    const [suggestion, useSuggestion] = useState(false)

    const handleSuggestionClick = () => {
        useSuggestion(true)
    }

    return (
        <div className="Suggestions">
            <div className="suggestion-container">
                <Button
                    className={suggestion ? "suggestion-button-hidden" : "suggestion-button"}
                    variant="contained"
                    color="primary"
                    style={{
                        width: '15rem',
                        height: '2.8rem',
                        borderRadius: '3rem'
                    }}
                    onClick={handleSuggestionClick}
                >
                    Get Suggestions
                </Button>
            </div>
        </div>
    );
}

export default Suggestions;