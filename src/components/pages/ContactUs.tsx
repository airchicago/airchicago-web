import type { CSSProperties } from 'react';
import logo from '../../assets/images/air_logo.svg';

export const ContactUs = () => {
  return (
    <div style={styles.base}>
      <h1>We are AiR: Chicago</h1>
      <h2>Activists in Resistance</h2>
      <span>
        Inquires to join or to help out can made made by reaching out over
        social media.
      </span>
    </div>
  );
};

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexGrow: 1,
    width: '100%',
    padding: '0 5% 10%',
  },
} satisfies Record<string, CSSProperties>;
