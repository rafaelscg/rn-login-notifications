import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight() + 10,
    paddingBottom: getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.primary,
  },

  titleImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: 10,
  },

  icon: {
    color: colors.white,
    transform: [{ rotate: '180deg' }],
  },
});

export default styles;
