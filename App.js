import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// Soal 1: RFC
const ProfileRFC = () => {
  return (
    <View style={styles.profileContainer}>
      <Image source={require('./assets/heker.webp')} style={styles.avatar} />
      <Text style={styles.profileText}>Nama: GUNTUR PURNAMAe</Text>
      <Text style={styles.profileText}>NPM: 232310022</Text>
      <Text style={styles.profileText}>Jurusan: TEKNOLOGI INFORMASI</Text>
      <Text style={styles.profileText}>Hobi: Coding, Gaming, Traveling</Text> 
    </View>
  );
};

// Soal 1: RCC
class ProfileRCC extends React.Component {
  render() {
    return (
      <View style={styles.profileContainer}>
        <Image source={require('./assets/heker.webp')} style={styles.avatar} />
        <Text style={styles.profileText}>Nama: GUNTUR PURNAMAe</Text>
        <Text style={styles.profileText}>NPM: 232310022</Text>
        <Text style={styles.profileText}>Jurusan: TEKNOLOGI INFORMASI</Text>
        <Text style={styles.profileText}>Hobi: Lari, Traveling, Renang</Text>
      </View>
    );
  }
}

// Soal 2: Form
const RegistrationForm = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [telp, setTelp] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.sectionTitle}>Formulir Pendaftaran</Text>
      <TextInput placeholder="Nama Lengkap" placeholderTextColor="#9ae1ff" style={styles.input} value={nama} onChangeText={setNama} />
      <TextInput placeholder="Email" placeholderTextColor="#9ae1ff" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput placeholder="No Telp" placeholderTextColor="#9ae1ff" style={styles.input} value={telp} onChangeText={setTelp} keyboardType="phone-pad" />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {submitted && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Hasil Input:</Text>
          <Text style={styles.resultText}>Nama: {nama}</Text>
          <Text style={styles.resultText}>Email: {email}</Text>
          <Text style={styles.resultText}>No Telp: {telp}</Text>
        </View>
      )}
    </View>
  );
};

// Soal 3: Tombol & Warna Retro
const ColorChanger = () => {
  const [warna, setWarna] = useState(styles.boxRetro1);

  const gantiWarna = () => {
    setWarna(prev => (prev === styles.boxRetro1 ? styles.boxRetro2 : styles.boxRetro1));
  };

  return (
    <View style={styles.colorContainer}>
      <View style={[styles.colorBox, warna]} />
      <TouchableOpacity style={styles.changeButton} onPress={gantiWarna}>
        <Text style={styles.changeButtonText}>Ganti Warna</Text>
      </TouchableOpacity>
    </View>
  );
};

// App Utama
export default function App() {
  return (
    <ScrollView style={styles.appContainer}>
      {/* Soal 1 */}
      <Text style={styles.title}>Soal 1: Profil RFC</Text>
      <ProfileRFC />
      <Text style={styles.title}>Soal 1: Profil RCC</Text>
      <ProfileRCC />

      {/* Soal 2 */}
      <Text style={styles.title}>Soal 2: Formulir Pendaftaran</Text>
      <RegistrationForm />

      {/* Soal 3 */}
      <Text style={styles.title}>Soal 3: Tombol & Warna</Text>
      <ColorChanger />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#0d0221',
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#ff2dfd',
    marginVertical: 15,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#00ffe7',
    marginBottom: 10,
    fontWeight: '600',
    fontFamily: 'monospace',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#1a0535',
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ff00ff',
    shadowColor: '#ff00ff',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#00ffe7',
  },
  profileText: {
    color: '#9ae1ff',
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'monospace',
  },
  formContainer: {
    backgroundColor: '#1a0535',
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#00ffe7',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#00ffe7',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'monospace',
  },
  submitButton: {
    backgroundColor: '#ff2dfd',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#ff2dfd',
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10,
  },
  submitButtonText: {
    color: '#0d0221',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'monospace',
  },
  resultContainer: {
    marginTop: 15,
    backgroundColor: '#330066',
    padding: 15,
    borderRadius: 10,
    borderColor: '#00ffe7',
    borderWidth: 1,
  },
  resultText: {
    color: '#9ae1ff',
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'monospace',
  },
  colorContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  colorBox: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: '#ff2dfd',
  },
  boxRetro1: {
    backgroundColor: '#00ffe7',
  },
  boxRetro2: {
    backgroundColor: '#ff2dfd',
  },
  changeButton: {
    backgroundColor: '#00ffe7',
    padding: 12,
    borderRadius: 10,
    shadowColor: '#00ffe7',
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10,
  },
  changeButtonText: {
    color: '#0d0221',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});
