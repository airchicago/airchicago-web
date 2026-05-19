import type { CSSProperties } from 'react';
import { Instagram } from '../reactIcons/Instagram';
import { Link } from 'react-router';
import { TikTok } from '../reactIcons/TikTok';
import { BlueSky } from '../reactIcons/BlueSky';
import { Substack } from '../reactIcons/Substack';
import { Threads } from '../reactIcons/Threads';

interface Props {
  top: number;
}

export const SocialWidgets = (props: Props) => {
  return (
    <div style={{ ...styles.floatingBox, top: props.top }}>
      <div style={styles.body}>
        <span>
          <h2>Socials</h2>
          <h4>Tracker free links!</h4>
          <p>That is, until you click on one</p>
        </span>
        <Link
          to='https://www.instagram.com/air.activists.in.resistance'
          style={styles.link}
          discover={'none'}
        >
          <Instagram style={styles.linkIcon} />
          <p>Instagram</p>
        </Link>
        <Link
          to={'https://www.tiktok.com/@activists.in.resistance'}
          style={styles.link}
          discover={'none'}
        >
          <TikTok style={styles.linkIcon} />
          <p>TikTok</p>
        </Link>
        <Link
          to={'https://www.threads.com/@air.activists.in.resistance'}
          style={styles.link}
          discover={'none'}
        >
          <Threads style={styles.linkIcon} />
          <p>Threads</p>
        </Link>
        <Link
          to={'https://bsky.app/profile/air-chicago.bsky.social'}
          style={styles.link}
          discover={'none'}
        >
          <BlueSky style={styles.linkIcon} />
          <p>BlueSky</p>
        </Link>
        <Link
          to={'https://substack.com/@airactivistsinresistance'}
          style={styles.link}
          discover={'none'}
        >
          <Substack style={styles.linkIcon} />
          <p>Substack</p>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  floatingBox: {
    position: 'absolute',
    right: 0,
    width: '15%',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: '.5em',
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    height: '2em',
    columnGap: '.5em',
  },
  linkIcon: {
    height: '2em',
    color: 'rgb(64, 165, 205)',
  },
} satisfies Record<string, CSSProperties>;
