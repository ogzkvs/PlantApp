import React, { useEffect, useState } from 'react';
import { useAppDispatch } from './hooks';
import { initializeSettings } from './slices/settingsSlice';
import { View, ActivityIndicator } from 'react-native';
import { fetchQuestions } from './slices/questionsSlice';
import { fetchCategories } from './slices/categoriesSlice';

type Props = {
  children: React.ReactNode;
};

const AppInitializer: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const init = async () => {
      await Promise.all([
        dispatch(initializeSettings()),
        dispatch(fetchQuestions()),
        dispatch(fetchCategories()),
      ]);
      setInitialized(true);
    };
    init();
  }, [dispatch]);

  if (!initialized) {
    // TODO: loading ekranını componente çek
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{children}</>;
};

export default AppInitializer;
