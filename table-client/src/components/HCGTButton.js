import React from 'react';
import { useNavigate } from "react-router-dom";
import './HCGTButton.css';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';


export default function HCGTButton({ navigation }) {

  const navigate = useNavigate();

  function navigateView()
  {
  		if (navigation == '/')
  		{
  			navigate(navigation);
  		}
  		else
  		{
  			//category.name = navigation;
  		}
  }

  return (
        <button className='HCGTButton' onClick={() => navigateView()}></button>
  );
}