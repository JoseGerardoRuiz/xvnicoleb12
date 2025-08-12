// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2X3DfD2E8D67YeAwS3VfIkVDNAzGOyWE",
  authDomain: "xvcokies.firebaseapp.com",
  projectId: "xvcokies",
  storageBucket: "xvcokies.firebasestorage.app",
  messagingSenderId: "828416221984",
  appId: "1:828416221984:web:d4a4f383eabf577113ad45",
  measurementId: "G-3D9CEPLJGW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Abrir sobre
window.openEnvelope = () => {
  const envelope = document.getElementById('envelope');
  const form = document.getElementById('formulario-codigo');

  envelope.classList.add('opened');
  setTimeout(() => {
    envelope.classList.add('hidden');
    form.classList.remove('oculto');
  }, 800);
};

// Validar código contra Firebase
document.getElementById('btn-validar').addEventListener('click', async () => {
  const codigo = document.getElementById('codigo').value.trim();
  const ref = doc(db, "invitados", codigo);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    const data = snap.data();
    document.getElementById('formulario-codigo').classList.add('oculto');
    document.getElementById('contenedor-menu').classList.remove('oculto');
    document.getElementById('nombre-invitado').textContent = data.nombre;
    document.getElementById('num-boletos').textContent = data.boletos;
    new QRCode(document.getElementById('qr-container'), {
      text: codigo,
      width: 150,
      height: 150
    });
    document.getElementById('invitacion').classList.remove('oculto');
  } else {
    document.getElementById('errorMessage').classList.remove('oculto');
  }
});
