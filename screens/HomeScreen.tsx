import React, {useState, useEffect, Component, useRef} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    useWindowDimensions,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import SplashScreen from '../screens/SplashScreen';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SvgXml } from 'react-native-svg';
import { styles } from '../styles/styles';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function HomeScreen(this: any): JSX.Element {
    type RootStackParamList = {
        Home: undefined;
        Results: undefined;
        Quiz: undefined;
      };

    const windowDimensions = useWindowDimensions();
    const [loading, setLoading] = useState(true);
    const [menuVisible, setMenuVisible] = useState(false);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();
    const menuItems = ['Home', 'Results'];
    const scrollViewRef = useRef<ScrollView>(null);

    useEffect(() => {
        // Simulate loading or initialization process
        setTimeout(() => {
          setLoading(false); // Set loading to false when loading is complete
        }, 3000); // Adjust the delay as needed
      }, []);


    const isLandscape = windowDimensions.width > windowDimensions.height;

    const landscapeStyles = isLandscape
        ? {
            head: styles.landscapeHead,
            body: styles.landscapeBody,
        }
        : {};

    return (
        <SafeAreaView style={[styles.head, landscapeStyles.head]}>
        {loading ? (
            <SplashScreen /> // Render the splash screen while loading
        ) : (
            // Render your main content when loading is complete

            <View style={styles.body}>

                <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
                <View style={styles.menuBar}>
                    <View style={styles.menuSelect}>

                        <TouchableOpacity>
                            <Text style={styles.menuText}>Img_User</Text>
                        </TouchableOpacity>


                        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
                        <View style={styles.menuImg}>
                            <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
                                <Text style={styles.menuText}>Menu</Text>
                            </TouchableOpacity>
                            {menuVisible && (
                                <View style={styles.menu}>
                                    {menuItems.map((item, index) => (
                                        <TouchableOpacity key={index} onPress={() => navigation.navigate(item as keyof RootStackParamList)}>
                                            <Text style={styles.menuItem}>{item}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}
                        </View>
                         </TouchableWithoutFeedback>


                        <TouchableOpacity>
                            <Text style={styles.menuText}>Value_User</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </TouchableWithoutFeedback>



                <View style={styles.listQuiz}>
                    <ScrollView ref={scrollViewRef}>
                        <View style={styles.quizBox}>
                            <View style={styles.title}>
                                <View style={styles.titleText}>
                                    <Text style={styles.header}>Quiz #1</Text>
                                    <Text style={[styles.difficulty,{color: 'green'}]}>Level: Easy</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={[styles.enterButton,{backgroundColor: 'green'}]} onPress={() => navigation.navigate('Quiz')}>BEGIN</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.</Text>
                        </View>

                        <View style={styles.quizBox}>
                            <View style={styles.title}>
                                <View style={styles.titleText}>
                                    <Text style={styles.header}>Quiz #2</Text>
                                    <Text style={[styles.difficulty,{color: 'yellow'}]}>Level: Medium</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={[styles.enterButton,{backgroundColor: 'yellow'}]} onPress={() => navigation.navigate('Quiz')}>BEGIN</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.</Text>
                        </View>

                        <View style={styles.quizBox}>
                            <View style={styles.title}>
                                <View style={styles.titleText}>
                                    <Text style={styles.header}>Quiz #3</Text>
                                    <Text style={[styles.difficulty,{color: 'orange'}]}>Level: Hard</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={[styles.enterButton,{backgroundColor: 'orange'}]} onPress={() => navigation.navigate('Quiz')}>BEGIN</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.</Text>
                        </View>

                        <View style={styles.quizBox}>
                            <View style={styles.title}>
                                <View style={styles.titleText}>
                                    <Text style={styles.header}>Quiz #4</Text>
                                    <Text style={[styles.difficulty, {color: 'red'}]}>Level: Very Hard</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={[styles.enterButton,{backgroundColor: 'red'}]} onPress={() => navigation.navigate('Quiz')}>BEGIN</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.</Text>
                        </View>


                    {/*Footer*/}

                        <View style={styles.quizBox}>
                            <Text style={styles.footer}>Gey to know your ranking result</Text>
                            <View style={styles.footerButtons}>
                                <TouchableOpacity onPress={() => navigation.navigate('Results')}>
                                    <Text style={styles.footerButton}>Check!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </ScrollView>
                </View>

            </View>
            )}
        </SafeAreaView>
    );


}

export default HomeScreen;
