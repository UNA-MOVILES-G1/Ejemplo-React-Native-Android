import { View, Text} from 'react-native';
import React from 'react';
import PersonList from '../components/PersonList';
import Layout from '../components/Layout';

const HomeScreen = () => {

  
  return (
    <Layout>
      <PersonList/>
    </Layout>
  );
};

export default HomeScreen