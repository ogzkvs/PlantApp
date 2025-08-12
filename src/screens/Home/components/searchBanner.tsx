import React, { useState } from 'react';
import styles from '../styles/components/searchBanner';
import { TextInput, View } from 'react-native';
import Icon from '../../../components/icons';

const SearchBanner: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={20} color="#ABABAB" />
        <TextInput
          style={styles.input}
          placeholder="Search for plants"
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#AFAFAF"
        />
      </View>
    </View>
  );
};

export default SearchBanner;
