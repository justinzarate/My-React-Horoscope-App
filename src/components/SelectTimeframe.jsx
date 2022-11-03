import React from 'react';

export const SelectTimeframe = ({
    onTimeframeSelected,
}) => {
return (
    <>
    <h2>Please select a timeframe ...</h2>
    <div className="grid">
    {['Yesterday', 'Today', 'Tomorrow'].map((timeframes) => (
        <button 
        className="timeframe" 
        key={timeframes} 
        onClick={() => onTimeframeSelected(timeframes)}
       > 
        {timeframes}
        </button>
      ))}
      </div>
      </>
)
}