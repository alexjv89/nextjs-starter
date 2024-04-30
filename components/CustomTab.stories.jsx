import { fn } from '@storybook/test';
import CustomTab from './CustomTab';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/CustomTab',
  component: CustomTab,
  tags:['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  
};


export const Primary = {
  args: {
    tabs:[
      {
        name:'Quote',
        slug:'quote',
        body:function(){return (<>Quote content</>)}(),
      },
      {
        name:'Versions',
        slug:'versions',
        stats:4,
        body:function(){return (<>Versions content</>)}(),
      },
      {
        name:'Compare',
        slug:'compare',
        body:function(){return (<>Compare content</>)}(),
      },
      {
        name:'Upload',
        slug:'upload',
        body:function(){return (<>Upload content</>)}(),
      },
    ],
    activeTab:'versions',
  },
};
