import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Carouse1 from './Carouse1';
import Carouse from './Carouse';

const Tab1 = () => {
  return (
    <div>
       <div className='mt-12 pl-2 max-w-full h-full bg-gray-300 mx-auto cursor-pointer'>
        <h1 className='pt-3 text-xl font-semibold'>Popular</h1>
        <h6 className='pt-2'>These datasets and projects are popular with in your organisation.</h6>
        <Tabs>
    <TabList>
      <Tab>Projects</Tab>
      <Tab>Datasets</Tab>
    </TabList>

    <TabPanel>
      <h2><Carouse/></h2>
    </TabPanel>
    <TabPanel>
      <h2><Carouse1/></h2>
    </TabPanel>
  </Tabs>
    </div></div>
  )
}

export default Tab1
