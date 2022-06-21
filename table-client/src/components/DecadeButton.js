import React from 'react';
import { useNavigate } from "react-router-dom";
import './DecadeButton.css';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function DecadeButton({ text, navigation }) {

const navigate = useNavigate();

function playOverviewVideo()
{
	console.log('worked');
	navigate(navigation)
}

  return (
        <button onClick={() => playOverviewVideo()}>{text}</button>
  );
}