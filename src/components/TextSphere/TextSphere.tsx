// import { useEffect } from 'react';
import { TagCloud } from '@frank-mayer/react-tag-cloud';
import './TextSphere.css';
// import TagCloud from 'TagCloud';

export default function TextSphere() {
  //   useEffect(() => {
  //     return () => {
  //       const container = '.tagcloud';
  //       const texts = [
  //         'React',
  //         'JavaScript',
  //         'CSS3',
  //         'Tailwinds',
  //         'User-friendly',
  //         'Scable',
  //         'Git',
  //         'NPM',
  //         'E2E Test',
  //         'Nodejs',
  //       ];
  //       const options = {
  //         radius: 300,
  //         maxSpeed: 'normal',
  //         initSpeed: 'normal',
  //         keep: true,
  //       };
  //       TagCloud(container, texts, options);
  //     };
  //   }, []);

  return (
    <TagCloud
      options={(w: Window & typeof globalThis) => ({
        radius: Math.min(300, w.innerWidth, w.innerHeight) / 2,
        maxSpeed: 'normal',
      })}
    >
      {[
        'JavaScript',
        'TypeScript',
        'React',
        'Nodejs',
        'CSS',
        'HTML',
        'Tailwinds',
        'NPM',
        'Git',
        'E2E Test',
      ]}
    </TagCloud>

    // <>
    //   <div className="text-shpere">
    //     {/* span tag className must be "tagcloud"  */}
    //     <span className="tagcloud"></span>
    //   </div>
    // </>
  );
}
