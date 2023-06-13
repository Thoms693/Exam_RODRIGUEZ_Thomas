import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const AjoutForm = ({ onAddGame }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [catégorie, setCategorie] = useState('');

    const handleAddJeu = () => {
        // verif si les champs sont remplis
        if (name && price && catégorie) {
            const newGame = {
                name,
                price,
                catégorie,
                id: Math.random().toString(),
            };
            onAddGame(newGame);

            // renitia les champs du form
            setName('');
            setPrice('');
            setCategorie('');
        }
    };

    return (
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nom du jeu"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Prix du jeu"
                    value={price}
                    onChangeText={setPrice}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Catégorie du jeu"
                    value={catégorie}
                    onChangeText={setCategorie}
                />
            </View>
            <Button title="Ajouter" onPress={handleAddJeu}color="blue" />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 100,

    },
    inputContainer: {
        marginRight: 10,
    },
    input: {
        height: 45,
        borderColor: 'black',
        borderWidth: 3,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 100,
    },
});

export default AjoutForm;
