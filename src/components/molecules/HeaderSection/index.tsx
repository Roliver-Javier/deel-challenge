import React from "react";
import { Text } from "../../atoms";
import styles from './index.module.css';

const HeaderSection = () => {
  return (
    <div className={styles.container}>
      <header>
        <Text variant="h1">Welcome, Friend</Text>
        <Text variant="h2">
          You've come to the right place. We can see here an autocomplete
          component with asynchronous call{" "}
        </Text>
      </header>
      
    </div>
  );
};

export default HeaderSection;
