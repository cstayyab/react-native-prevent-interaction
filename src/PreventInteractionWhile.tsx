import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal } from 'react-native';

export interface PreventInteractionWhileProps {
  whileCondition: boolean;
}

const PreventInteractionWhile: React.FC<
  PreventInteractionWhileProps
> = ({ whileCondition }) => {
  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={whileCondition}
      onRequestClose={() => { }}>
      <View style={styles.coverAll} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  coverAll: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
});

// Named export
export { PreventInteractionWhile };

// Default export
export default PreventInteractionWhile;