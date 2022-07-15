import RoundedTextInput from "components/RoundedTextInput";
import { useContext } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import buttonStyle from "styles/button";
import { GlobalContext } from "Store";


const editIcon = require("assets/goal/edit.png");
const todoIcon = require("assets/goal/todo.png");
const progressIcon = require("assets/goal/progress.png");
const doneIcon = require("assets/goal/done.png");
const firewerkIcon = require("assets/goal/firewerk.png");
const archiveIcon = require("assets/goal/archive.png");

export default ({navigation})=>{
    const [context, setContext] = useContext(GlobalContext);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Моя цель</Text>
                <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate("DescribeGoal")
                        console.log("navigating");
                    } }
                >
                    <Image style={styles.smallIcon} source={editIcon}/>
                </TouchableOpacity>
            </View>
            <View style={styles.goalDescriptionContainer}>
                <Text style={styles.goalDescriptionText}>{context.goalDescription}</Text>
                <Text style={styles.goalDescriptionText}>{context.goalCriteria}</Text>
                <Text style={styles.goalDescriptionText}>К {context.goalDeadline}</Text>
                <Text style={styles.goalDescriptionText}>{context.goalReason}</Text>
            </View>
            <View style={styles.progresContainer}>
                <View style={styles.progressRow}>
                    <Image style={[styles.smallIcon, styles.progressIcon]} source={doneIcon}/>
                    <Text>{context.goalFirstStep}</Text>
                </View>
                <View style={styles.progressSeparator}></View>

                <View style={styles.progressRow}>
                    <Image style={[styles.smallIcon, styles.progressIcon]} source={progressIcon}/>
                    <Text>{context.goalSecondStep}</Text>
                </View>
                <View style={[styles.progressSeparator, styles.progressSeparatorInactive]}></View>

                <View style={styles.progressRow}>
                    <Image style={[styles.smallIcon, styles.progressIcon]} source={todoIcon}/>
                    <Text>{context.goalThirdStep}</Text>
                </View>
                <View style={[styles.progressSeparator, styles.progressSeparatorInactive]}></View>

                <View style={styles.progressRow}>
                    <Image style={[styles.smallIcon, styles.progressIcon]} source={todoIcon}/>
                    <Text>{context.goalFourthStep}</Text>
                </View>
                <View style={[styles.progressSeparator, styles.progressSeparatorInactive]}></View>

                <View style={styles.progressRow}>
                    <Image style={[styles.smallIcon, styles.progressIcon]} source={todoIcon}/>
                    <Text>Цель достигута! </Text>
                    <Image style={styles.smallIcon} source={firewerkIcon}/>
                </View>
            </View>
            <View style={{flexGrow: 1, justifyContent: "flex-end", marginBottom: 70}}>


                <TouchableOpacity style={[buttonStyle.enabled, {marginBottom: 5, marginTop: 0, opacity: 0.3}]}
                onPress={()=>navigation.navigate("FirstScreen")}>
                    <Text style={buttonStyle.buttonText}>Начать все с начала (временная кнопка)</Text>
                </TouchableOpacity>

                <RoundedTextInput
                    placeholder="Загрузи файл (pdf, docx, excel)"
                    style={styles.fileInput}
                ></RoundedTextInput>
                <TouchableOpacity style={[buttonStyle.enabled, {marginBottom: 5, marginTop: 0}]}>
                    <Text style={buttonStyle.buttonText}>Отправить отчет</Text>
                </TouchableOpacity>
                <View style={[styles.progressRow, {marginVertical: 10}]}>
                    <Text style={[styles.goalDescriptionText, {color: "#64ACFF"}]}>Показать архив целей </Text>
                    <Image style={{width: 12, height: 8, marginTop: 3}} source={archiveIcon}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 30,
        justifyContent: "flex-start",
        flexDirection: "column",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerText: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "500",
    },
    smallIcon: {
        height: 16,
        width: 16,
    },
    progressIcon: {
        marginRight: 5,
    },
    goalDescriptionContainer: {
        marginTop: 15,
        marginVertical: 30,
    },
    goalDescriptionText: {
        fontSize: 16,
        fontWeight: "400",
    },
    progresContainer: {
    },
    progressRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    progressSeparator: {
        width: 2,
        height: 15,
        backgroundColor: "#64ACFF",
        marginLeft: 7,
        marginVertical: 3,
    },
    progressSeparatorInactive: {
        backgroundColor: "#E6E6E8",
    },
    fileInput: {
        marginTop: 30,
        maxHeight: 50,
    }
})