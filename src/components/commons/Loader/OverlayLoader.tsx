import { portalId } from '@/constants/portal-id';
import ReactDOM from 'react-dom';
import { MoonLoader } from 'react-spinners';

interface OverlayLoaderType {
  isActive: boolean;
}

const OverlayLoader = ({ isActive }: OverlayLoaderType) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div>
          <div
            className={`bg-opacity-50 fixed inset-0 z-[1000] flex items-center justify-center bg-black transition-opacity duration-300 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'} ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
          >
            <MoonLoader color='#fff' size={120} speedMultiplier={0.4} />
          </div>
        </div>,
        document.getElementById(portalId.loader)!
      )}
    </>
  );
};

export type { OverlayLoaderType };
export default OverlayLoader;
