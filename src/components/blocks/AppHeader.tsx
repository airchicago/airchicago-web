import type { CSSProperties } from 'react';
import LogoSvg from '../../assets/images/air_logo.svg';
import ChicagoStar from '../../assets/images/chicago_star.svg';
import { AppPages } from '../../utils/definitions/constants';
import { NavigationButton } from './NavigationButton';

export const AppHeader = () => {
  return (
    <header style={styles.toolbar}>
      <div style={styles.top}>
        {/* Left side items */}
        <a href='/' style={{ textDecoration: 'none' }}>
          <div style={styles.leftSide}>
            <img
              src={LogoSvg}
              alt='Activists in Resistance Logo'
              style={styles.logo}
            />
            <h1 style={styles.title}>
              Activists
              <div
                style={{
                  backgroundImage: `url("${ChicagoStar}")`,
                  backgroundSize: '100% auto',
                  backgroundRepeat: 'no-repeat',
                  padding: '30px',
                  margin: '-30px',
                  backgroundClip: 'unset',
                }}
              >
                {' in '}
              </div>
              Resistance
            </h1>
          </div>
        </a>
      </div>
      <nav style={styles.bottom}>
        <div style={{ borderLeft: '2px solid rgba(0, 0, 0, 0.5)' }}>
          <NavigationButton buttonPage={AppPages.Home}>
            <h3>Home</h3>
          </NavigationButton>
          <NavigationButton buttonPage={AppPages.Mission}>
            <h3>Mission</h3>
          </NavigationButton>
          <NavigationButton buttonPage={AppPages.AboutUs}>
            <h3>About us</h3>
          </NavigationButton>
          <NavigationButton buttonPage={AppPages.ContactUs}>
            <h3>Contact us</h3>
          </NavigationButton>
        </div>
      </nav>
    </header>
  );
};

const styles = {
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    backgroundColor: '#40a5cd',
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '4px 32px',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
    backgroundColor: '#2a80a2',
    padding: '0px 4vw',
  },
  leftSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
  },
  logo: {
    height: '14vmin',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '1vw',
    lineHeight: '7vmin',
    fontSize: '7vmin',
    margin: '0',
    color: 'white',
    fontWeight: '600',
    WebkitTextStroke: '0.2vmin black',
  },
} satisfies Record<string, CSSProperties>;
