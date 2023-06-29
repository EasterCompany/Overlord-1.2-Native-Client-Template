// Library
import { useRef } from 'react';
import { View, Image, Text, TextInput } from 'react-native';
// Assets
import CalendarIcon from '../../assets/images/calendar.png';
// Styles
import theme from '../../App.style';


const InputDate = ({ label, textAlign, onChangeDay, onChangeMonth, onChangeYear, validInput }) => {
  const dayInput = useRef();
  const monthInput = useRef();
  const yearInput = useRef();
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
        ref={dayInput}
        maxLength={2}
        blurOnSubmit={false}
        returnKeyType="next"
        keyboardType="numeric"
        onSubmitEditing={() => monthInput.current.focus()}
        onChangeText={(text) => {
          dayInput.current.value = dayInput.current.value.replace(/\D/g,'');
          onChangeDay(dayInput.current.value);
          if (dayInput.current.value.length === 2) {
            monthInput.current.focus();
          }
        }}
        placeholder="DD"
        placeholderTextColor= "#475569"
        style={[ theme.loginInput, borderHighlight, { textAlign: alignment, paddingLeft: 0 } ]}
      />
      <Text> / </Text>
      <TextInput
        ref={monthInput}
        maxLength={2}
        blurOnSubmit={false}
        returnKeyType="next"
        keyboardType="numeric"
        onSubmitEditing={() => yearInput.current.focus()}
        onChangeText={(text) => {
          monthInput.current.value = monthInput.current.value.replace(/\D/g,'');
          onChangeMonth(monthInput.current.value);
          if (monthInput.current.value.length === 2) {
            yearInput.current.focus();
          }
        }}
        placeholder="MM"
        placeholderTextColor= "#475569"
        style={[ theme.loginInput, borderHighlight, { textAlign: alignment, paddingLeft: 0 } ]}
      />
      <Text> / </Text>
      <TextInput
        ref={yearInput}
        maxLength={4}
        blurOnSubmit={false}
        returnKeyType="next"
        keyboardType="numeric"
        onSubmitEditing={() => {}}
        onChangeText={(text) => {
          yearInput.current.value = yearInput.current.value.replace(/\D/g,'');
          onChangeYear(yearInput.current.value);
        }}
        placeholder="YYYY"
        placeholderTextColor= "#475569"
        style={[ theme.loginInput, borderHighlight, { textAlign: alignment, paddingLeft: 0 } ]}
      />
    </View>
  </View>;
};


export default InputDate;
