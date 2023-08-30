import React from 'react';
import { FlatList } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import {
  useResponsiveScalability,
  useScale,
  useStyle,
} from 'react-native-responsive-scalability';

import { ArticleCard } from '../components';

const data = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    description:
      'Nullam dignissim nibh augue vel. Nullam dignissim nibh augue vel. Nullam dignissim nibh augue vel.',
  },
  {
    id: 2,
    title: 'Dolor Sit Amet',
    description:
      'Dui lacinia eget sed viverra. Dui lacinia eget sed viverra. Dui lacinia eget sed viverra.',
  },
  {
    id: 3,
    title: 'Adipiscing',
    description:
      'Dolor ac mattis venenatis in hac. Dolor ac mattis venenatis in hac. Dolor ac mattis venenatis in hac.',
  },
  {
    id: 4,
    title: 'Pellentesque',
    description:
      'Habitasse platea dictumst donec. Habitasse platea dictumst donec. Habitasse platea dictumst donec.',
  },
  {
    id: 5,
    title: 'Risus Diam',
    description:
      'Id est et massa consequat feugiat. Id est et massa consequat feugiat. Id est et massa consequat feugiat.',
  },
  {
    id: 6,
    title: 'Vulputate Id',
    description:
      'Fusce ut metus eget diam mattis. Fusce ut metus eget diam mattis. Fusce ut metus eget diam mattis.',
  },
  {
    id: 7,
    title: 'Ullamcorper',
    description:
      'Tempor sed vel lorem sed eleifend. Tempor sed vel lorem sed eleifend. Tempor sed vel lorem sed eleifend.',
  },
  {
    id: 8,
    title: 'Euismod Neque',
    description:
      'Molestie libero at ultrices lorem. Molestie libero at ultrices lorem. Molestie libero at ultrices lorem.',
  },
];

type Props = {
  onArticlePress: () => void;
};
export const Articles = ({ onArticlePress }: Props) => {
  const { width } = useSafeAreaFrame();

  const { breakpoints } = useResponsiveScalability();
  const { scaleByWidth } = useScale();

  let numColumns = 1;
  if (width >= breakpoints.sm) numColumns = 2;
  if (width >= breakpoints.md) numColumns = 3;
  if (breakpoints.lg && width >= breakpoints.lg) numColumns = 4;

  return (
    <FlatList
      key={`flatlist-column-${numColumns}`}
      data={data}
      keyExtractor={(item) => `item-${item.id}`}
      numColumns={numColumns}
      renderItem={({ item }) => (
        <ArticleCard
          title={item.title}
          description={item.description}
          onPress={onArticlePress}
        />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={useStyle(
        () => ({ margin: scaleByWidth(4) }),
        [scaleByWidth],
      )}
    />
  );
};
