import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';
import Loader from "../../components/loader";

interface StackOverflowScreenProps {
  route: {
    params: {
      url: string;
    };
  };
  navigation: any;
}

const StackOverflowScreen: React.FC<StackOverflowScreenProps> = ({ route, navigation }) => {
  const { url } = route.params;
  const [isLoading, setIsLoading] = useState(true);

  if (!url) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>URL not provided.</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          accessibilityLabel="Go back"
        >
          <Text style={styles.backButtonText}>{"Back"}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleWebViewLoad = () => {
    setIsLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        hitSlop={styles.hitslop}
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        accessibilityLabel="Go back"
      >
        <Text style={styles.backButtonText}>{"Back"}</Text>
      </TouchableOpacity>
      {isLoading && <Loader />}
      <WebView
        source={{ uri: url }}
        onLoad={handleWebViewLoad}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hitslop: {
    top: 5,
    bottom: 5,
    left: 10,
    right: 20
  },
  backButton: {
    height: 40,
    justifyContent: "center",
    marginLeft: 20,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },
  errorText: {
    fontSize: 18,
    fontWeight: "600",
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});

export default StackOverflowScreen;
