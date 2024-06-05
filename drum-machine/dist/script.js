import ReactDOM from "https://esm.sh/react-dom";
import React from "https://esm.sh/react";

const firstSoundsGroup = [
{
  keyCode: 81,
  key: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  keyCode: 87,
  key: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  keyCode: 69,
  key: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  keyCode: 65,
  key: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  keyCode: 83,
  key: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  keyCode: 68,
  key: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  keyCode: 90,
  key: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  keyCode: 88,
  key: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  keyCode: 67,
  key: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];



const secondSoundsGroup = [
{
  keyCode: 81,
  key: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },

{
  keyCode: 87,
  key: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },

{
  keyCode: 69,
  key: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },

{
  keyCode: 65,
  key: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },

{
  keyCode: 83,
  key: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },

{
  keyCode: 68,
  key: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },

{
  keyCode: 90,
  key: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },

{
  keyCode: 88,
  key: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },

{
  keyCode: 67,
  key: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' }];



const soundsName = {
  heaterKit: " Heater Kit",
  smoothPianoKit: "Smooth Piano Kit" };


const soundsGroup = {
  heaterKit: firstSoundsGroup,
  smoothPianoKit: secondSoundsGroup };


const KeyboardKey = ({ play, sound: { key, url, keyCode }, power }) => {
  const handleKeydown = e => {

    if (event.keyCode === keyCode) {
      play(key);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, []);

  return /*#__PURE__*/(
    React.createElement("button", { className: "drum-pad", onClick: () => play(key), disabled: power }, /*#__PURE__*/
    React.createElement("audio", { className: "clip", id: key, src: url }),
    key));


};

const KeyBoard = ({ play, sounds, power }) => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "drum-pads" },
    sounds.map(sound => /*#__PURE__*/React.createElement(KeyboardKey, { play: play, sound: sound, power: power }))));


};

const DrumControls = ({ changeSound }) => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "controle" }, /*#__PURE__*/
    React.createElement("button", { onClick: () => changeSound() }, " Change Sounds Group")));


};

const App = () => {
  const [soundType, setSoundType] = React.useState("heaterKit");
  const [sounds, setSounds] = React.useState(soundsGroup[soundType]);
  const [power, setPower] = React.useState(false);
  const [volume, setVolume] = React.useState(1);
  const [soundName, setSoundName] = React.useState("");

  const play = (key, sound) => {
    setSoundName(sound);
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  const changeSound = () => {
    if (soundType === "heaterKit") {
      setSoundType("smoothPianoKit");
      setSounds(soundsGroup.smoothPianoKit);
    } else {
      setSoundType("heaterKit");
      setSounds(soundsGroup.heaterKit);
    }
  };

  const handleVolumeChange = e => {
    setVolume(e.target.value);
  };

  const setKeyVolume = () => {
    const audios = sounds.map(sound => document.getElementById(sound.key));
    audios.forEach(audio => {
      if (audio) {
        audio.volume = volume; //set volume tone
      }
    });
  };

  return /*#__PURE__*/React.createElement("div", { id: "drum-machine", class: "app-color" }, "\uD83E\uDD41Drum Controller (click any note) \uD83C\uDFB6 \uD83C\uDFB6", /*#__PURE__*/


  React.createElement(KeyBoard, { play: play, sounds: sounds, power: power }), /*#__PURE__*/

  React.createElement(DrumControls, { changeSound: changeSound }), /*#__PURE__*/

  React.createElement("h2", null, "Volume: %", Math.round(volume * 100)),
  setKeyVolume(), /*#__PURE__*/
  React.createElement("input", {
    max: "1",
    min: "0",
    step: "0.01",
    type: "range",
    value: volume,
    onChange: handleVolumeChange }), /*#__PURE__*/

  React.createElement("br", null), /*#__PURE__*/


  React.createElement("button", { onClick: () => setPower(!power) },
  power ? "Drum Off" : "Drum On"), /*#__PURE__*/

  React.createElement("br", null), "Sound type is now: ",


  soundType);

};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));