import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="text-green-400 font-mono whitespace-pre">
      {`
 _           _     _                                   _ _ 
| |__   ___ | |__ (_)   __ _ _   _ _ __   __ _ _ __ __| (_)
| '_ \\ / _ \\| '_ \\| |  / _\` | | | | '_ \\ / _\` | '__/ _\` | |
| |_) | (_) | |_) | | | (_| | |_| | | | | (_| | | | (_| | |
|_.__/ \\___/|_.__/|_|  \\__, |\\__,_|_| |_|\\__,_|_|  \\__,_|_|
                       |___/                               
`}
    </div>
  );
};

export default Banner;