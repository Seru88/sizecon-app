import React from 'react';
import Modal from '../components/Modal';

const FloorMap: React.FC = () => {
  const src =
    'https://images.squarespace-cdn.com/content/v1/56e86bc3746fb97fd1a89e39/1578173188930-91FXYKV4Y86Z0FZAHA28/ke17ZwdGBToddI8pDm48kMbQYoMuGxkebbVGTFKj2T57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUKRt_15RfbuGeFC5HfZtMFwO1KaGmfdjRj0-nhHKxn4Dxb2w5SppyqLtPdkEDDHsw/MAP.jpg?format=1500w';

  return (
    <div>
      <Modal open>
        <div className="flex justify-center items-center w-full h-full">
          <img className="m-auto w-11/12" src={src} alt="floor-map" />
        </div>
      </Modal>
    </div>
  );
};

export default FloorMap;
