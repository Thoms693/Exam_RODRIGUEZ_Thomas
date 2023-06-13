import React from 'react';
import { StyleSheet, TouchableOpacity, Text, } from 'react-native';

const SupprJeu = ({ onPress, id }) => {
    const handlePress = () => {
        onPress(id);
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    deleteButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SupprJeu;
