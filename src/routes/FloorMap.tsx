import React from 'react';
import PinchZoomPan from 'react-responsive-pinch-zoom-pan';

const FloorMap: React.FC = () => {
  const src =
    'https://images.squarespace-cdn.com/content/v1/56e86bc3746fb97fd1a89e39/1581272509441-QLWTXSER6SYIZ2V5QXD7/ke17ZwdGBToddI8pDm48kFjSKjQ9TwpPyn7iWQ2KXNB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbxO1Dk3MBTWC4Xu1AaowgNJ5vHqWO5InuWncXdVukOUFpnC4feEL-z8BdL9DiAhdw/MAP.jpg?format=1500w';

  return (
    <div className="flex justify-center items-center w-full"
    style={{ height: 'calc(100vh - 100px)' }}>
      <PinchZoomPan position="center" maxScale={5}>
        <img className="m-auto w-auto" src={src} alt="floor-map" />
      </PinchZoomPan>
    </div>
  );
};

export default FloorMap;
