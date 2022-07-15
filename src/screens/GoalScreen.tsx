import RoundedTextInput from "components/RoundedTextInput";
import { useContext, useRef, useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import buttonStyle from "styles/button";
import { GlobalContext } from "Store";


const editIcon = require("assets/goal/edit.png");
const todoIcon = require("assets/goal/todo.png");
const progressIcon = require("assets/goal/progress.png");
const doneIcon = require("assets/goal/done.png");
const firewerkIcon = require("assets/goal/firewerk.png");
const archiveIcon = require("assets/goal/archive.png");


const pepa = require("assets/pepa/pepa.png");

const PEPA_START = 0;
const PEPA_END = 300;

export default ({navigation})=>{
    const [context, setContext] = useContext(GlobalContext);
    const [report, setReport] = useState();

    console.log(context.firstStepStatus);

    
    const pepaBottom = useRef(
        new Animated.Value(PEPA_START)
    ).current;

    const pepaStart = () => {
        Animated.timing(pepaBottom, {
            toValue: PEPA_START,
            duration: 150,
            useNativeDriver: true,
        }).start();
    }
    const pepaEnd = () => {
        Animated.timing(pepaBottom, {
            toValue: PEPA_END,
            duration: 150,
            useNativeDriver: true,
        }).start();
    }

    return (
        <View style={styles.container}>
            {/* <Image style={[styles.pepaStyle, {top: pepaBottom}]} source={pepa}/> */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Моя цель</Text>
                <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate("DescribeGoal")
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
                    {
                        context.firstStepStatus == "progress"
                        ? <Image style={[styles.smallIcon, styles.progressIcon]} source={progressIcon}/>
                        : context.firstStepStatus == "done"
                            ? <Image style={[styles.smallIcon, styles.progressIcon]} source={doneIcon}/>
                            : <Image style={[styles.smallIcon, styles.progressIcon]} source={todoIcon}/>
                    }
                    {/* <Image style={[styles.smallIcon, styles.progressIcon]} source={doneIcon}/> */}
                    <Text>{context.goalFirstStep}</Text>
                </View>
                <View style={[styles.progressSeparator, context.firstStepStatus != "done" ? styles.progressSeparatorInactive : {}]}></View>

                <View style={styles.progressRow}>
                {
                        context.secondStepStatus == "progress"
                        ? <Image style={[styles.smallIcon, styles.progressIcon]} source={progressIcon}/>
                        : context.secondStepStatus == "done"
                            ? <Image style={[styles.smallIcon, styles.progressIcon]} source={doneIcon}/>
                            : <Image style={[styles.smallIcon, styles.progressIcon]} source={todoIcon}/>
                    }
                    {/* <Image style={[styles.smallIcon, styles.progressIcon]} source={progressIcon}/> */}
                    <Text>{context.goalSecondStep}</Text>
                </View>
                <View style={[styles.progressSeparator, context.secondStepStatus != "done" ? styles.progressSeparatorInactive : {}]}></View>

                <View style={styles.progressRow}>
                {
                        context.thirdStepStatus == "progress"
                        ? <Image style={[styles.smallIcon, styles.progressIcon]} source={progressIcon}/>
                        : context.thirdStepStatus == "done"
                            ? <Image style={[styles.smallIcon, styles.progressIcon]} source={doneIcon}/>
                            : <Image style={[styles.smallIcon, styles.progressIcon]} source={todoIcon}/>
                    }
                    {/* <Image style={[styles.smallIcon, styles.progressIcon]} source={todoIcon}/> */}
                    <Text>{context.goalThirdStep}</Text>
                </View>
                <View style={[styles.progressSeparator, context.thirdStepStatus != "done" ? styles.progressSeparatorInactive : {}]}></View>

                <View style={styles.progressRow}>
                {
                        context.fourthStepStatus == "progress"
                        ? <Image style={[styles.smallIcon, styles.progressIcon]} source={progressIcon}/>
                        : context.fourthStepStatus == "done"
                            ? <Image style={[styles.smallIcon, styles.progressIcon]} source={doneIcon}/>
                            : <Image style={[styles.smallIcon, styles.progressIcon]} source={todoIcon}/>
                    }
                    {/* <Image style={[styles.smallIcon, styles.progressIcon]} source={todoIcon}/> */}
                    <Text>{context.goalFourthStep}</Text>
                </View>
                <View style={[styles.progressSeparator, context.fourthStepStatus != "done" ? styles.progressSeparatorInactive : {}]}></View>

                <View style={styles.progressRow}>
                {
                        context.fourthStepStatus == "done"
                        ? <Image style={[styles.smallIcon, styles.progressIcon]} source={doneIcon}/>
                        : <Image style={[styles.smallIcon, styles.progressIcon]} source={todoIcon}/>
                    }
                    {/* <Image style={[styles.smallIcon, styles.progressIcon]} source={todoIcon}/> */}
                    <Text>Цель достигута! </Text>
                    <Image style={styles.smallIcon} source={firewerkIcon}/>
                </View>
            </View>
            <View style={{flexGrow: 1, justifyContent: "flex-end", marginBottom: 70}}>


                {/* <TouchableOpacity style={[buttonStyle.enabled, {marginBottom: 5, marginTop: 0, opacity: 0.3}]}
                onPress={()=>navigation.navigate("FirstScreen")}>
                    <Text style={buttonStyle.buttonText}>Начать все с начала (временная кнопка)</Text>
                </TouchableOpacity> */}

                <RoundedTextInput
                    placeholder="Загрузи файл (pdf, docx, excel)"
                    style={styles.fileInput}
                    value={report}
                    onChangeText={(v)=>setReport(v)}
                ></RoundedTextInput>
                <TouchableOpacity style={[buttonStyle.enabled, {marginBottom: 5, marginTop: 0}]}
                onPress={() => {
                    pepaStart();
                    setReport("");
                    if (context.secondStepStatus == "progress") {
                        console.log("gosecond")
                        setContext({...context, secondStepStatus: "done", thirdStepStatus: "progress", coins: context.coins+10})
                        
                        return;
                    } 
                    if (context.thirdStepStatus == "progress") {
                        console.log("gosecond2")
                        setContext({...context, thirdStepStatus: "done", fourthStepStatus: "progress", coins: context.coins+10})
                        return;
                    } 
                    if (context.fourthStepStatus == "progress") {
                        setContext({...context, fourthStepStatus: "done", coins: context.coins+10})
                        return;
                    }
                    if (context.firstStepStatus == "progress") {
                        setContext({...context, firstStepStatus: "done", secondStepStatus: "progress", coins: context.coins+10})
                        return;
                    }
                }}>
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
    pepaStyle: {
        height: 268,
        width: 335,
        position: "absolute",
        zIndex: 100,
    },
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