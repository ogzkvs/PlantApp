import React, { useEffect, useState } from 'react';
import { useAppDispatch } from './hooks';
import { initializeSettings } from './slices/settingsSlice';
import { fetchQuestions } from './slices/questionsSlice';
import { fetchCategories } from './slices/categoriesSlice';
import Loading from '../components/loading/loading';

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
    return <Loading />;
  }

  return <>{children}</>;
};

export default AppInitializer;
