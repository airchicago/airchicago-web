import { AppPages } from '../../utils/definitions/constants';
import { useAppPageContext } from '../../utils/hooks/contextBased/useAppPage';
import { useState, type CSSProperties } from 'react';

type Props = {
  buttonPage: AppPages;
  children: React.ReactNode;
};

export const NavigationButton = (props: Props) => {
  const pageContext = useAppPageContext();
  const isDisabled = props.buttonPage === pageContext.appPage;

  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      aria-disabled={isDisabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      style={{
        ...styles.button,
        pointerEvents: isDisabled ? 'none' : undefined,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        backgroundColor: isDisabled
          ? '#40a5cd'
          : isActive
            ? '#154051'
            : isHovered
              ? '#206079'
              : '#2a80a2',
      }}
      onClick={() => pageContext.setPage(props.buttonPage)}
    >
      {props.children}
    </button>
  );
};

const styles = {
  button: {
    cursor: 'pointer',
    textTransform: 'none',
    color: 'white',
    fontWeight: 600,
    border: 'unset',
    padding: '12px',
    borderRight: '2px solid rgba(0, 0, 0, 0.5)',
    transition: 'background-color 0.1s',
  },
} satisfies Record<string, CSSProperties>;
