import * as React from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

// Import helper code
import Settings from '../constants/Settings';

// Import styling and components
import { TextParagraph, TextH1, TextH2, TextH3, TextListItem } from "../components/StyledText";
import Styles from "../styles/MainStyle";
import Colours from '../constants/Colours';
import { MyButton } from '../components/MyButton';
export default function HelpScreen(props) {
//state Management
//Create state variable for the font size

//const[variableName,setVariableName]=React.useState("default")
const[fontSizeModifier,setFontSizeModifier]=React.useState(Settings.fontSizeModifier)
//changeFontSize(-0.1)
function changeFontSize(sizeModifier){
 //TODO:validate the font size (e.g.not negative)
  //update the global settings value


  Settings.fontSizeModifier+=sizeModifier


//update the state variable to re-ender the screen()
setFontSizeModifier(Settings.fontSizeModifier)
}

return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>

        <View>
          
          <TextH1 style={{marginTop:0}}>Help topics</TextH1>
          <TextH2>Change Settings</TextH2>
          <TextParagraph>Here are some basic setting to change to make the app more comfortable to use.</TextParagraph>
          <TextH3>Font Size</TextH3>

          <View style={Styles.helpButtonContainer}>
          
          <MyButton
            text="-Smaller"
            type="default"      // default*|major|minor
            size="medium"      // small|medium*|large
            onPress={()=>{changeFontSize(-0.1)}}
            
            buttonStyle={Styles.helpButton}
           
          />
            <MyButton
            text="+Bigger"
            type="default"      // default*|major|minor
            size="medium"      // small|medium*|large
            onPress={()=>{changeFontSize(+0.1)}}
            buttonStyle={Styles.helpButton}
         
          />  
          </View>  


          <TextH2>Main tab navigation</TextH2>

          <TextParagraph>The main navigation bar is at the button of the apps and shows the major screens/functions.</TextParagraph>

          <TextH2>Custom components</TextH2>

          <TextParagraph>Each tab linksto an important screen</TextParagraph>

          <TextH3>Actions:</TextH3>

          <TextListItem>Home - The landing page of the app</TextListItem>
          <TextListItem>View People - List all the people</TextListItem>
          <TextListItem>Add Person - Add a new person</TextListItem>
          <TextListItem>Help - View this help content</TextListItem>

          <TextH2>Home Screen</TextH2>
          <TextParagraph>This is the The landing page of the app.and provides some usefull shortcuts </TextParagraph>

          <TextH3>Actions:</TextH3>

          <TextListItem>View People - List all the people</TextListItem>
          <TextListItem>Help - View this screen of helpful content</TextListItem>
         

        

          
          <TextH2>Wanna go home?</TextH2>

          <Pressable onPress={() => props.navigation.replace('Root')}>
            <TextParagraph style={{marginVertical: 10, color: Colours.tabLabelSelected}}>Click here to go home...</TextParagraph>
          </Pressable>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}