// Library
import { View, Image, Text, TextInput } from 'react-native';
// Assets
import CalendarIcon from '../../assets/images/calendar.png';
// Styles
import theme from '../../App.style';


const InputDate = ({ label, textAlign, onChangeDay, onChangeMonth, onChangeYear, validInput } : any) => {
  const alignment = textAlign === undefined ? 'center' : textAlign;

  const borderHighlight = {
    borderColor: '#ffff',
    borderWidth: 0
  };

  if (validInput !== undefined && validInput !== null) {
    validInput ? borderHighlight.borderColor = "#00695C" : borderHighlight.borderColor = "#BF360C";
    borderHighlight.borderWidth = 2;
  };

  return <View style={theme.loginInputContainer}>
    <View style={theme.loginInputIconContainer}>
      <Image source={CalendarIcon} resizeMode='contain' style={theme.loginInputIcon}/>
      <Text style={theme.loginInputLabel}>{label}</Text>
    </View>
    <View style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
      <TextInput
        onChangeText={onChangeDay}
        placeholder="DD"
        placeholderTextColor= "#475569"
        style={[ theme.loginInput, borderHighlight, { textAlign: alignment, paddingLeft: 0 } ]}
      />
      <Text> / </Text>
      <TextInput
        onChangeText={onChangeMonth}
        placeholder="MM"
        placeholderTextColor= "#475569"
        style={[ theme.loginInput, borderHighlight, { textAlign: alignment, paddingLeft: 0 } ]}
      />
      <Text> / </Text>
      <TextInput
        onChangeText={onChangeYear}
        placeholder="YYYY"
        placeholderTextColor= "#475569"
        style={[ theme.loginInput, borderHighlight, { textAlign: alignment, paddingLeft: 0 } ]}
      />
    </View>
  </View>;
};


export default InputDate;
