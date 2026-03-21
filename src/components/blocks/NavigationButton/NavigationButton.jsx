import './NavigationButton.css';
import { AppPages } from '../../../utils/definitions/constants';
import { useAppPageContext } from '../../../utils/hooks/contextBased/useAppPage';

/**
 * @typedef NavigationButtonProps
 * @type {object}
 * @property {AppPages} buttonPage
 * @property {React.ReactNode} children
 */

/**
 *
 * @param {NavigationButtonProps} props
 */
export const NavigationButton = (props) => {
  const pageContext = useAppPageContext();
  const isDisabled = props.buttonPage === pageContext.appPage;

  return (
    <button
      className={'button'}
      aria-disabled={isDisabled}
      style={
        isDisabled ? { pointerEvents: 'none', backgroundColor: '#40a5cd' } : undefined
      }
      onClick={() => pageContext.setPage(props.buttonPage)}
    >
      {props.children}
    </button>
  );
};
