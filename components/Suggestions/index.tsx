import React from "react";

// Components
import Suggestion from "../Suggestions/Suggestion";
import SuggestionsHeader from "../Suggestions/SuggestionsHeader";
type Props = {};

const Suggestions = (props: Props) => {
  return (
    <div>
      {/* Header */}
      <SuggestionsHeader />
      {/* Suggestions */}
      <div>
        <Suggestion />
      </div>
    </div>
  );
};

export default Suggestions;
