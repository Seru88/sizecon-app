import React from 'react';

const FloorMap: React.FC = () => {
  const src =
    'https://images.squarespace-cdn.com/content/v1/56e86bc3746fb97fd1a89e39/1578173188930-91FXYKV4Y86Z0FZAHA28/ke17ZwdGBToddI8pDm48kMbQYoMuGxkebbVGTFKj2T57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUKRt_15RfbuGeFC5HfZtMFwO1KaGmfdjRj0-nhHKxn4Dxb2w5SppyqLtPdkEDDHsw/MAP.jpg?format=1500w';

  return (
    <div
      className="flex justify-center items-center w-full"
      style={{ height: 'calc(100vh - 100px)' }}
    >
      <img className="m-auto w-auto" src={src} alt="floor-map" />
    </div>
  );
};

export default FloorMap;
