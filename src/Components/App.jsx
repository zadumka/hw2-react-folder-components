import { useEffect, useState } from 'react';
import './App.css';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const LS_KEY_OPTIONS = 'LS_KEY_OPTIONS';

function App() {
  const [options, setOptions] = useState(() => {
    const data = localStorage.getItem(LS_KEY_OPTIONS);
    return data ? JSON.parse(data) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY_OPTIONS, JSON.stringify(options));
  }, [options]);

  const handleClickOption = option => {
    setOptions(prev => ({ ...prev, [option]: prev[option] + 1 }));
  };

  const handleClickReset = () => {
    setOptions(initialState);
  };

  const getTotalFeedback = () => {
    const { good, neutral, bad } = options;
    return good + neutral + bad;
  };

  const getPositiveFeedback = () => {
    const { good, neutral } = options;
    return Math.round(((good + neutral) / getTotalFeedback()) * 100);
  };

  return (
    <>
      <Description />

      <Options
        onClickReset={handleClickReset}
        onClickOption={handleClickOption}
        options={options}
        total={getTotalFeedback()}
      />

      {getTotalFeedback() > 0 ? (
        <Feedback
          options={options}
          total={getTotalFeedback()}
          positiveFeedback={getPositiveFeedback()}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
