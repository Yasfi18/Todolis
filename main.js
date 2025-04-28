
  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id, 
      tugas: dok.data().tugas,
      prioritas: dok.data().prioritas,
      status: dok.data().status,
      tanggal: dok.data().tanggal
    });
  });
  
  return hasil;
}

export function formatAngka(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export async function tambahtoDOList(tugas, prioritas, status, tanggal) {
  try {
    const dokRef = await addDoc(collection(db, 'toDOList'), {
      tugas:  tugas,
      prioritas: prioritas,
      status: status,
      tanggal: tanggal
    });
    console.log('Berhasil menambah toDOList' + dokRef.id);
  } catch (e) {
    console.log('Gagal menambah toDOList' + e);
  }
}

export async function hapustoDOList(docId) {
  await deleteDoc(doc(db, "toDOList", docId));
}

export async function ubahtoDOList(docId, tugas, prioritas, status, tanggal) {
  await updateDoc(doc(db, "toDOList", docId),{
    tugas: tugas,
    prioritas: prioritas,
    status: status,
    tanggal: tanggal
  });
}

export async function ambiltoDOList(docId) {
  const docRef = await doc(db, "toDOList", docId);
  const docSnap = await getDoc(docRef);
  
  return await docSnap.data();
}