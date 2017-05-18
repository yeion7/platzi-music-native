/* @flow */

import React, { Component } from "react";
import { View } from "react-native";

import { Container } from "native-base";

import ResultsListContainer from "../containers/ResultsListContainer";
import SearcherContainer from "../containers/SearcherContainer";
import PlayerContainer from "../containers/PlayerContainer";

import { error } from "../utils/error";
import Expo, { Audio, Font } from "expo";

export default class Main extends Component {
  async componentDidMount() {
    await Audio.setIsEnabledAsync(true);
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentLockedModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
    });
  }

  loadNewInstance = song => {
    const { playbackInstance } = this.state;
    if (playbackInstance !== null) {
      playbackInstance.unloadAsync();
      playbackInstance.setCallback(null);
      this.setState({ playbackInstance: null });
    }
    const SOUND_URL = { source: song.preview_url };
    if (SOUND_URL.source !== null) {
      const sound = new Audio.Sound(SOUND_URL);
      sound.setCallback(this.statusSong);

      this.setState({
        playbackInstance: sound,
        currentSong: song,
        showPlayer: true,
        isLoading: true,
        index: song.track_number
      });

      sound.loadAsync();
    } else {
      error("Canción sin URL");
    }
  };

  statusSong = status => {
    if (status.isLoaded) {
      this.setState({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        isPlaying: status.isPlaying
      });
    }

    if (status.didJustFinish && this.state.index) {
      this.handleForward();
    }

    if (status.didJustFinish && !this.state.index) {
      this.setState({ showPlayer: false });
    }

    if (status.isLoaded && !status.positionMillis) {
      this.state.playbackInstance.playAsync();
    }

    if (status.isPlaying) {
      this.setState({ isLoading: false });
    }
  };

  handleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handlePlayPause = () => {
    const { isPlaying, playbackInstance } = this.state;

    if (playbackInstance != null) {
      if (isPlaying) {
        playbackInstance.pauseAsync();
        this.setState({ isPlaying: !isPlaying });
      } else {
        playbackInstance.playAsync();
        this.setState({ isPlaying: !isPlaying });
      }
    }
  };

  handleForward = () => {
    const { index, playList } = this.state;

    newIndex = index >= playList.length ? 0 : index;
    this.loadNewInstance(playList[newIndex]);
  };

  handleBack = () => {
    const { index, playList } = this.state;
    newIndex = index == 1 ? playList.length - 1 : index - 2;
    this.loadNewInstance(playList[newIndex]);
  };

  render() {
    return (
      <Container>
        <SearcherContainer />

        <ResultsListContainer />

        <PlayerContainer />

      </Container>
    );
  }
}
