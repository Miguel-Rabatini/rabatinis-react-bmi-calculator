//react
import React from "react";

//Components
import BMICalculator from "./BMICalculator";

//Style
import styles from "./Main.module.css";

const Main: React.FC = (): React.ReactElement => {
  return (
    <main className={styles.main}>
      <BMICalculator />
    </main>
  );
};

export default Main;
