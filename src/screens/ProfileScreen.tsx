import { Text, Image, View, StyleSheet } from "react-native";

export default () => {
    return (
        <View>
            <Text style={styles.profileHeader}>Профиль</Text>
            <Image source={require('assets/user/PersonPhoto.png')} style={styles.image}/>
            <Text style={{marginTop: 47, resizeMode: 'contain', alignSelf: 'center', fontSize: 24 }}>Вася Пупкин</Text>
            <View style={styles.profileInfo}>
            <ProfileInfoLine
                image={require('assets/user/user.png')}
                header="  Имя и фамилия"
                subHeader="m.me/Jacob_d "    
            />
            <ProfileInfoLine
                image={require('assets/user/telegram.png')}
                header="  Ник в телеграме"
                subHeader="m.me/Jacob_d "    
            />
            <ProfileInfoLine
                image={require('assets/user/mail.png')}
                header="  Почта"
                subHeader="m.me/Jacob_d "
            />
            <ProfileInfoLine
                image={require('assets/user/phone.png')}
                header="  Телефон"
                subHeader="+1 202 555 0147 "
            />
            </View>
        </View>
    )
}

const ProfileInfoLine = ({image, header, subHeader}) => {
  
    return (
        <View style={styles.profileInfoLineStyle}>
            <Image source={image} style={styles.iconImage}/>
            <Text style={styles.header} >{header}</Text>
            <View style={{flexGrow: 1, flexDirection: "row", justifyContent:"flex-end"}}>
            <Text style={[styles.subHeader, {alignContent: "flex-end"}]} >{subHeader}</Text>
            <Image source={require('assets/user/Shape.png')} style={styles.iconShape}/>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profileHeader: {
        fontSize: 24,
        marginTop: 37,
        marginLeft: 20
    },
    header: {
        fontSize: 18,
        textAlign: "left",
    },
    subHeader: {
        fontSize: 17,
        color: "#A3B4B9"
    },
    image: {
      width: 130,
      height: 130,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginTop: 64,
    },
    iconImage: {
      width: 30,
      height: 30
    },
    profileInfo: {
        // marginTop: 78
    },
    profileInfoLineStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: 25,
        marginRight: 25,
        marginTop:  20
    },
    iconShape: {
      marginTop: 3,
      width: 8,
      height: 13,
      alignSelf: "center"
    }
})