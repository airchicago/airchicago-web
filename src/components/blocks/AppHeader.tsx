import { useRef, type CSSProperties } from 'react';
import LogoSvg from '../../assets/images/air_logo.svg';
import ChicagoStar from '../../assets/images/chicago_star.svg';
import { AppPages, AppRoutes } from '../../utils/definitions/routeDefinitions';
import { NavigationButton } from './NavigationButton';
import { SocialWidgets } from './SocialWidgets';

export const AppHeader = () => {
  const headerRef = useRef<HTMLElement | null>(null);

  return (
    <header ref={headerRef} style={styles.toolbar}>
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
              <p style={{ zIndex: 1 }}>Activists</p>
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
              <p style={{ zIndex: 1 }}>Resistance</p>
            </h1>
          </div>
        </a>
      </div>
      <nav style={styles.bottom}>
        <div style={styles.bottomButtons}>
          <NavigationButton to={AppRoutes[AppPages.Home]}>
            <h3>Home</h3>
          </NavigationButton>
          <NavigationButton to={AppRoutes[AppPages.Mission]}>
            <h3>Mission</h3>
          </NavigationButton>
          <NavigationButton to={AppRoutes[AppPages.AboutUs]}>
            <h3>About us</h3>
          </NavigationButton>
          <NavigationButton to={AppRoutes[AppPages.ContactUs]}>
            <h3>Contact us</h3>
          </NavigationButton>
        </div>
      </nav>
      <SocialWidgets
        top={headerRef.current?.getBoundingClientRect().bottom || 0}
      />
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
    position: 'sticky',
    top: 0,
    width: '100%',
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
  bottomButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    columnGap: '2px',
    padding: '0 2px',
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
