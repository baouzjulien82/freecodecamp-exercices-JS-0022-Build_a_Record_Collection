const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    // Supprimer la propriété si value est vide
    delete records[id][prop];
  } else if (prop !== "tracks") {
    // Si ce n'est pas tracks, mettre à jour la propriété
    records[id][prop] = value;
  } else {
    // Si c'est tracks
    if (!records[id][prop]) {
      // Si tracks n'existe pas, créer un tableau vide
      records[id][prop] = [];
    }
    // Ajouter la valeur au tableau tracks
    records[id][prop].push(value);
  }
  return records; // Toujours retourner l'objet complet
}
