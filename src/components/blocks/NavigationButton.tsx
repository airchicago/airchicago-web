import { useState, type CSSProperties } from 'react';
import { NavLink } from 'react-router';
import { AppRoutes } from '../../utils/definitions/routeDefinitions';

type Props = {
  to: (typeof AppRoutes)[keyof typeof AppRoutes];
  children: React.ReactNode;
};

export const NavigationButton = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBeingClicked, setIsBeingClicked] = useState(false);

  return (
    <NavLink to={props.to}>
      {({ isActive }) => (
        <button
          aria-disabled={isActive}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsBeingClicked(true)}
          onMouseUp={() => setIsBeingClicked(false)}
          style={{
            ...styles.button,
            pointerEvents: isActive ? 'none' : undefined,
            cursor: isActive ? 'not-allowed' : 'pointer',
            backgroundColor: isActive
              ? '#40a5cd'
              : isBeingClicked
                ? '#154051'
                : isHovered
                  ? '#206079'
                  : '#2a80a2',
          }}
        >
          {props.children}
        </button>
      )}
    </NavLink>
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
