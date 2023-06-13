import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ScrollView } from 'react-native';
import AjoutForm from './src/AjoutForm';
import SupprJeu from './src/SupprJeu';

export default function App() {
    const [username, setUsername] = useState("Thoms693");
    const [jeuxVideos, setJeuxVideos] = useState([

        {
            name: "Medal of Honor",
            price: "10€",
            catégorie: "FPS",
            id: 23124
        },
        {
            name: "Street Fighter 2",
            price: "20€",
            catégorie: "Combat",
            id: 12349
        },
        {
            name: "Call of Duty",
            price: "30€",
            catégorie: "FPS",
            id: 549762
        },
        {
            name: "NBA2K5",
            price: "5€",
            catégorie: "Sport",
            id: 549763
        },
        {
            name: "God Of War 2018",
            price: "25€",
            catégorie: "Action-Aventure",
            id: 549764
        },
        {
            name: "The Legend of Zelda: The Wind Walker",
            price: "35€",
            catégorie: "Action-Aventure",
            id: 549765
        },
        {
            name: "Horizon: Forbidden West",
            price: "40€",
            catégorie: "Action-Aventure",
            id: 549766
        },
        {
            name: "Forza Horizon 5",
            price: "45€",
            catégorie: "Voiture",
            id: 549767
        },
        {
            name: "The Last Of Us",
            price: "55€",
            catégorie: "Survival horror",
            id: 549768
        },
        {
            name: "Red Dead Redemption II",
            price: "18€",
            catégorie: "Action-Aventure",
            id: 549769
        }
    ]);
    const [jeuCount, setJeuCount] = useState(jeuxVideos.length);
//ajout
    const handleAddGame = (newGame) => {
        setJeuxVideos([...jeuxVideos, newGame]);
        setJeuCount(jeuCount + 1);
    };
//suppr
    const handleDeleteGame = (id) => {
        setJeuxVideos((prevJeuxVideos) => {
            const updatedJeuxVideos = prevJeuxVideos.filter((jeu) => jeu.id !== id);
            setJeuCount(updatedJeuxVideos.length);
            return updatedJeuxVideos;
        });
    };
//header
    const GameHeader = () => {
        return (
            <View style={styles.rectangleShape}>
                <Text style={styles.pseudo}>{username}</Text>
                <Text style={styles.nombreJeux}>{`Nb jeux vidéo: ${jeuCount}`}</Text>
            </View>
        );
    };

    const renderItem = ({ item }) => (
        <SafeAreaView style={styles.jeuVideoContainer}>
            <View style={styles.jeuVideoInfo}>
                <Text style={styles.jeuVideoNom}>{item.name}</Text>
                <Text style={styles.jeuVideoPrice}>{item.price}</Text>
            </View>
            <Text style={styles.jeuVideoCategorie}>{item.catégorie}</Text>
            <SupprJeu onPress={handleDeleteGame} id={item.id} />
        </SafeAreaView>
    );

    return (
        <SafeAreaView style={styles.container}>
            <GameHeader />
            <Text style={styles.title}>Mon App de jeux vidéos</Text>
            <FlatList
                style={{ marginTop: 30 }}
                data={jeuxVideos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            <AjoutForm onAddGame={handleAddGame} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        justifyContent: 'center',
    },
    jeuVideoContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    jeuVideoInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    jeuVideoNom: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    jeuVideoPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
    jeuVideoCategorie: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'blue',
    },
    rectangleShape: {
        marginTop: 2,
        marginBottom: 10,
        width: 170 * 2,
        height: 30,
        borderWidth: 3,
        backgroundColor:'black',
    },
    pseudo: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        textAlign: 'left',

    },
    nombreJeux: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'right',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center',
    },

});