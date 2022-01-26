import './TryAgainPopup.css';

const TryAgainPopup = ({
  onYesButtonClick,
  onNoButtonClick,
}) => {
  return (
    <>
      <div id="popup">
        Do you want to save this attempt?
        <button onClick={onYesButtonClick}>YES</button>
        <button onClick={onNoButtonClick}>NO</button>
      </div>
    </>
  )
}

export default TryAgainPopup;