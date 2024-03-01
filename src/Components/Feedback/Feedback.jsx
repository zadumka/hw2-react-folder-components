import styles from './Feedback.module.css';

const Feedback = ({ options, total, positiveFeedback }) => {
  return (
    <>
      {Object.keys(options).map(option => {
        return (
          <p className={styles.text} key={option}>
            {option}: {options[option]}
          </p>
        );
      })}
      <p className={styles.text}> total: {total}</p>
      <p className={styles.text}> positive: {positiveFeedback}%</p>
    </>
  );
};

export default Feedback;
