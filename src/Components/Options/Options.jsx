import styles from './Options.module.css';

const Options = ({ options, onClickOption, total, onClickReset }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {Object.keys(options).map(option => (
          <button
            key={option}
            className={styles.button}
            onClick={() => onClickOption(option)}
          >
            {option}
          </button>
        ))}
        {total > 0 && (
          <button className={styles.reset} onClick={() => onClickReset()}>
            reset
          </button>
        )}
      </div>
    </>
  );
};

export default Options;
