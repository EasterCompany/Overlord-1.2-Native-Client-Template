/*
  The ToggleButton will toggle between True/False boolean state-managed props that are given to it.
  Provide the prop data like this:

    [
      state,
      setState()
    ]

  So that the props.state[0] is the variable and state[1] is the state management function.
*/

// Libs
import { Pressable, Image } from 'react-native';
// Styles
import theme from '../../App.theme.ts';
// Assets
import closeImg from '../../assets/images/closeImg.png';


const ToggleButton = (props:any) => <Pressable
  style={[theme.toggleButton, props.style]}
  onPress={() => props.switch[1](!props.switch[0])}
>
  <Image source={props.image} style={{width:props.width, height:props.height}}/>
</Pressable>


export default ToggleButton;
