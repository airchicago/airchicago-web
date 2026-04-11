import type { CSSProperties } from 'react';

export const HomePage = () => {
  return <div style={styles.mainBody}></div>;
};

const styles = {
  mainBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
} satisfies Record<string, CSSProperties>;
