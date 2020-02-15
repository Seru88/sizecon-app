import React from 'react';
import PinchZoomPan from 'react-responsive-pinch-zoom-pan';

const FloorMap: React.FC = () => {
  const src =
    'https://images.squarespace-cdn.com/content/v1/56e86bc3746fb97fd1a89e39/1581747911333-J4FC7G29VNCC8PWPPVR6/ke17ZwdGBToddI8pDm48kDNorFrosvB_CLhaBvC7Ky97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UY2ZJ4JKY3xthaXF93T7vMY-_wOGeZaOY321OvnwgiLQk2v_tolygBs-nNvSJMbAHg/FINISHEDMAP.jpg?format=1500w';

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
